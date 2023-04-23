import ListOfProducts from '@/components/ListOfProducts'
import { getCategories, getProducts } from '@/services/getProducts'
import SEO from '@/components/SEO'

export default function Page({ products }) {
  return (
    <>
      <SEO
        title="Productos"
        description={
          'Pagina de productos de Motos Center Tienda de partes de motos'
        }
      />
      <ListOfProducts products={products} />
    </>
  )
}
export async function getStaticPaths() {
  const categories = await getCategories()

  const paths = categories.map((category) => {
    return {
      params: { categoria: category },
    }
  })

  return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
  const products = await getProducts()
  const productsFiltered = products.filter(
    (p) => p.category[0] === params.categoria
  )

  return { props: { products: productsFiltered }, revalidate: 60 }
}
