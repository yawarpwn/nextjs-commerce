import { navigationByCategory } from '@/constants/navigation'
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
    const { offert, name, description, price, brand, category } = fields
    return {
      name,
      brand: brand ? brand : 'nacional',
      category,
      offert: offert ? offert : null,
      description,
      id: sys.id,
      price,
      slug: nameToSlug(fields.name),
      details: fields.details ? fields.details : null,
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

export async function getCategories () {
  // const products = await getProducts()
  // const categoriesFromProduct = products.map(p => p.category[0])
  // const categories = [...new Set(categoriesFromProduct)]
  // return categories
  return navigationByCategory.map(c => c.title.toLowerCase())
}

