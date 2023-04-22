import { getProducts } from '@/services/getProducts'
import ProductPage from '@/components/ProductPage'
import { nameToSlug } from '@/utils'

export default function Page({ product}) {
  return (
    <div>
      <ProductPage product={product} />
    </div>
  )
}
// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const products = await getProducts()

  // Get the paths we want to pre-render based on posts
  const paths = products.map((product) => {
    return {
      params: { slug : product.slug },
    }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const products = await getProducts()
  const product  = products.find(p => p.slug === params.slug)
  // Pass post data to the page via props
  return { props: { product } }
}
