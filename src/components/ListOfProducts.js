import ProductCard from "@/components/ProductCard"

export default function ListOfProducts({ products }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
      {products.map(({ fields, sys }, index) => {
        return <ProductCard product={fields} key={sys.id} />
      })}
    </div>
  )
}
