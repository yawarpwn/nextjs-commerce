import ListOfProducts from '@/components/ListOfProducts'
import { getCategories, getProducts } from '@/services/getProducts'
import SEO from '@/components/SEO'

export default function Page({ products }) {
  if(products.length === 0) {
    return <>
      <div className='min-h-[calc(100vh-64px)] flex items-center justify-center'>
        <h2 className='text-2xl font-extrabold'>No hay productos Aun</h2>
      </div>
    </>
  }
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

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const products = await getProducts()
  const productsFiltered = products.filter(
    (p) => p.category[0] === params.categoria
  )

  return { props: { products: productsFiltered } }
}
