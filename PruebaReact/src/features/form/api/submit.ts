import { api } from '@/shared/api/base'
import type { FormValues } from '../schema/form'

export async function submitForm(data: FormValues) {
  const res = await api.post('/forms', data)
  return res.data
}
