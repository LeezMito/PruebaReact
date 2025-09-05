import { z } from 'zod'

export const CatalogSchema = z.object({
  paisCode: z.string(),   
  paisName: z.string(),
  estadoCode: z.string(),
  estadoName: z.string(),     
})
export type Catalog = z.infer<typeof CatalogSchema>
export const CatalogsSchema = z.array(CatalogSchema)