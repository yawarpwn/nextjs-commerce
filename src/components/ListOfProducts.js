import ProductCard from "@/components/ProductCard"

export default function ListOfProducts({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.map(product => {
        return <ProductCard product={product} key={product.id} />
      })}
    </div>
  )
}
