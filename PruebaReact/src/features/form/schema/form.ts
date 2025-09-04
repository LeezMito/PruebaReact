import { z } from 'zod'

export const FormSchema = z.object({
  fullName: z.string().min(3, 'Mínimo 3 caracteres'),
  email: z.string().email('Email inválido'),
  amount: z.coerce.number().positive('Debe ser > 0'),
  notes: z.string().max(200, 'Máximo 200 caracteres').optional(),
  agree: z.boolean().refine(v => v === true, { message: 'Debes aceptar términos' }),
})

export type FormValues = z.infer<typeof FormSchema>
