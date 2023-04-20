import { createClient } from "contentful"
import ListOfProducts from "@/components/ListOfProducts"

export default function Productos({ products }) {
  return (
    <>
      <ListOfProducts products={products} />
    </>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: "84zksbb4bim6",
    accessToken: "o3HA92n-hmWBmgcCk1f0uAjJQ4IV-nZ9wD2M1WrDugk",
  })

  const res = await client.getEntries({ content_type: "productos" })

  return {
    props: {
      products: res.items,
    },
  }
}
