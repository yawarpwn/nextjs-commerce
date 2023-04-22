import { nameToSlug } from '@/utils'
import { createClient } from 'contentful'

const client = createClient({
  space: '84zksbb4bim6',
  accessToken: 'o3HA92n-hmWBmgcCk1f0uAjJQ4IV-nZ9wD2M1WrDugk',
})

export async function getProducts() {
  const res = await client.getEntries({ content_type: 'productos' })
  const products = res.items

  const mappedProducts = products.map(({ fields, sys, metadata }) => {
    return {
      name: fields.name,
      description: fields.description,
      id: sys.id,
      slug: nameToSlug(fields.name),
      images: fields.images.map(({ fields, sys }) => {
        return {
          url: fields.file.url,
          title: fields.title,
          id: sys.id,
        }
      }),
    }
  })

  return mappedProducts
}

export async function getProduct(entryId) {
  const res = await client.getEntry(entryId)
  const { fields, sys, metadata } = res
  const { name, description, price, images: imagesFromApi } = fields
  const images = imagesFromApi.map((image) => {
    return {
      url: image.fields.file.url,
      title: image.fields.title,
    }
  })

  const entryMapped = {
    name,
    description,
    price,
    images,
    id: sys.id,
  }
  return entryMapped
}
