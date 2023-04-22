import { getProduct, getProducts } from '@/services/getProducts'
import ProductPage from '@/components/ProductPage'

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
      params: { slug : product.id },
    }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const product  = await getProduct(params.slug)
  // Pass post data to the page via props
  return { props: { product } }
}
