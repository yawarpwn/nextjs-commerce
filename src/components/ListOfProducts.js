import ProductCard from "@/components/ProductCard"

export default function ListOfProducts({ products}) {
  return (
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {products.map(({ fields: product }, index) => {
          return <ProductCard product={product} key={index} />
        })}
      </div>
  )
}
