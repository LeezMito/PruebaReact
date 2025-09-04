import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormSchema, type FormValues } from '../schema/form'
import { useMutation } from '@tanstack/react-query'
import { submitForm } from '../api/submit'

export default function FormPage() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } =
    useForm<FormValues>({
      resolver: zodResolver(FormSchema),
      defaultValues: { fullName: '', email: '', amount: 0, notes: '', agree: false },
    })

  const mut = useMutation({
    mutationFn: submitForm,
    onSuccess: () => reset(),
  })

  const onSubmit = (v: FormValues) => mut.mutate(v)

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4 border rounded-lg p-6">
        <h1 className="text-xl font-semibold">Formulario de ejemplo</h1>

        <div>
          <label className="block text-sm mb-1">Nombre completo</label>
          <input className="border rounded w-full p-2" {...register('fullName')} placeholder="Ada Lovelace" />
          {errors.fullName && <p className="text-red-600 text-sm">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input className="border rounded w-full p-2" type="email" {...register('email')} placeholder="ada@ejemplo.com" />
          {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Monto</label>
          <input className="border rounded w-full p-2" type="number" step="0.01" {...register('amount')} />
          {errors.amount && <p className="text-red-600 text-sm">{errors.amount.message}</p>}
        </div>

        <div>
          <label className="block text-sm mb-1">Notas (opcional)</label>
          <textarea className="border rounded w-full p-2" rows={3} {...register('notes')} />
          {errors.notes && <p className="text-red-600 text-sm">{errors.notes.message}</p>}
        </div>

        <label className="flex items-center gap-2">
          <input type="checkbox" {...register('agree')} />
          <span>Acepto términos y condiciones</span>
        </label>
        {errors.agree && <p className="text-red-600 text-sm">{errors.agree.message}</p>}

        <div className="flex items-center gap-2">
          <button
            type="submit"
            disabled={isSubmitting || mut.isPending}
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {mut.isPending ? 'Enviando…' : 'Enviar'}
          </button>
          <button type="button" onClick={() => reset()} className="px-4 py-2 border rounded">
            Limpiar
          </button>
        </div>

        {mut.isError && <p className="text-red-700">No se pudo enviar. Intenta de nuevo.</p>}
        {mut.isSuccess && <p className="text-green-700">¡Enviado con éxito!</p>}
      </form>
    </div>
  )
}
