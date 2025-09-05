import { z } from 'zod'

export const CreateForm = z.object({
  pais: z.string().min(1, 'Requerido'),
  estado: z.string().min(1, 'Requerido'),
  poblacion: z.string().min(1, 'Requerido').max(30, 'Máximo 30 caracteres'),
  fecha: z.string().optional(), 
  descripcion: z.string().max(30, 'Máximo 30 caracteres').optional().or(z.literal('')),
  abreviatura: z.string().max(30, 'Máximo 30 caracteres').optional().or(z.literal('')),
})

export type CreateFormValues = z.infer<typeof CreateForm>