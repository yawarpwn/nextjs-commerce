import ListOfProducts from "@/components/ListOfProducts"
import SEO from "@/components/SEO"
import { getProducts } from "@/services/getProducts"

export default function Productos({ products = [] }) {
  return (
    <>
      <SEO title="Productos" description={'Pagina de productos de Motos Center Tienda de partes de motos'} />
      <ListOfProducts products={products} />
    </>
  )
}

export async function getStaticProps() {

  const products = await getProducts()

  return {
    props: {
      products
    },
    revalidate: 1000
  }
}
