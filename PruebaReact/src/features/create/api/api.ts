//import { api } from '../../../shared/api/base'
import { CatalogsSchema, type Catalog } from '../schema/catalog'

export async function getCatalog(): Promise<Catalog[]> {
  //const res = await api.get('/catalog/')
  //return CatalogsSchema.parse(res.data)
  await new Promise(res => setTimeout(res, 300))

  const mock: Catalog[] = [
    { paisCode: 'MX', paisName: 'México', estadoCode: 'CMX', estadoName: 'Ciudad de México' },
    { paisCode: 'MX', paisName: 'México', estadoCode: 'JAL', estadoName: 'Jalisco' },
    { paisCode: 'MX', paisName: 'México', estadoCode: 'NLE', estadoName: 'Nuevo León' },
    { paisCode: 'US', paisName: 'Estados Unidos', estadoCode: 'CA',  estadoName: 'California' },
    { paisCode: 'US', paisName: 'Estados Unidos', estadoCode: 'NY',  estadoName: 'New York' },
    { paisCode: 'AR', paisName: 'Argentina', estadoCode: 'BA', estadoName: 'Buenos Aires' },
  ]

  return CatalogsSchema.parse(mock)
}