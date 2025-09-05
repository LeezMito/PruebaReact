import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import TextInput from '../../../shared/ui/TextInput'
import Select from '../../../shared/ui/Select'
import Button from '../../../shared/ui/Button'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useMemo, useEffect } from 'react'
import { CreateForm, type CreateFormValues } from './schema/form'
import { save, getCatalog } from './api/api'
import Swal from 'sweetalert2'

export default function CreatePage() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateFormValues>({
    resolver: zodResolver(CreateForm),
    defaultValues: {
      pais: '',
      estado: '',
      poblacion: '',
      fecha: '',
      descripcion: '',
      abreviatura: '',
    },
  })

  const { data: catalog, isLoading } = useQuery({
    queryKey: ['catalog'],
    queryFn: getCatalog,
  })

  const pais = watch('pais')

  const isMX = (pais ?? '').toUpperCase() === 'MX'

  useEffect(() => {
    setValue('estado', '')
  }, [pais, setValue])

  useEffect(() => {
    if (!isMX) {
      setValue('fecha', '')
      setValue('descripcion', '')
    }
  }, [isMX, setValue])
  
  const paisesOptions = useMemo(() => {
    const seen = new Set<string>()
    return (catalog ?? [])
      .filter(item => {
        if (seen.has(item.paisCode)) return false
        seen.add(item.paisCode)
        return true
      })
      .map(item => ({ value: item.paisCode, label: item.paisName }))
  }, [catalog])

  const estadosOptions = useMemo(() => {
    if (!pais) return []
    return (catalog ?? [])
      .filter(item => item.paisCode === pais)
      .map(item => ({ value: item.estadoCode, label: item.estadoName }))
  }, [catalog, pais])

  const mut = useMutation({
    mutationFn: save,
    onSuccess: () => reset(),
  })

  const onSubmit = (values: CreateFormValues) => {
    Swal.fire({
      icon: 'success',
      title: 'Guardado',
      text: 'El formulario se envió correctamente',
      confirmButtonColor: '#f59e0b',
    })
  }

  return (
    <div className="max-w-2xl">
      <h2 className="mb-4 text-xl font-semibold">Ejercicio</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Select
          label="País*"
          error={errors.pais?.message}
          options={paisesOptions}
          {...register('pais')}
        />

        <Select
          label="Estado*"
          error={errors.estado?.message}
          options={estadosOptions}
          disabled={!pais}
          {...register('estado')}
        />

        <TextInput
          label="Población*"
          maxLength={30}
          placeholder="Nombre de la población"
          error={errors.poblacion?.message}
          {...register('poblacion')}
        />

        {isMX && (
          <div className="pt-2">
            <div className="text-sm text-slate-500 mb-1">Días feriados</div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-1">Fecha (opcional)</label>
                <input
                  type="date"
                  className={`w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400 border-slate-300`}
                  {...register('fecha')}
                />
              </div>

              <TextInput
                label="Descripción (opcional)"
                maxLength={30}
                placeholder="Ej. Día de la Constitución"
                error={errors.descripcion?.message}
                {...register('descripcion')}
              />
            </div>
          </div>
        )}

        <TextInput
          label="Abreviatura (opcional)"
          maxLength={30}
          placeholder="Ej. CDMX"
          error={errors.abreviatura?.message}
          {...register('abreviatura')}
        />

        <div className="flex items-center gap-2 pt-2 justify-end">
          <Button type="submit" loading={isSubmitting || mut.isPending}>
            Guardar
          </Button>
          <button type="button" onClick={() => reset()} className="px-4 py-2 border rounded">
            Limpiar
          </button>
        </div>
      </form>
    </div>
  )
}


