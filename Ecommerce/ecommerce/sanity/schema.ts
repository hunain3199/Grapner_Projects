import { type SchemaTypeDefinition } from 'sanity'

import products from './products'
import saleproducts from './saleproducts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products,saleproducts],
}
