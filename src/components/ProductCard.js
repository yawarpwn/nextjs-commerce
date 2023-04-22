import { getDiscount, nameToSlug } from "@/utils"
export default function ProductCard({ product }) {
  const { name , images, price, offert,  id, brand } = product
  const discount = getDiscount({price, offert})
  const slugName = nameToSlug(name)
  return (
    <a href={`/productos/${slugName}`}>
      <div className="product-card shadow-md rounded-md transition-all">
        <div className="relative h-0 w-full pb-[100%]">
          <img
            className="absolute inset-0 max-h-[155px] m-auto max-w-[85%]"
            alt={name}
            src={images[0].url}
            loading="lazy"
          />
        </div>
        <div className="product-card__body p-2">
            <span className="text-xs font-bold uppercase">{brand}</span>
          <div className="min-h-[60px] mt-2">
            <p className="text-xs md:text-sm">{name}</p>
          </div>
          {offert ? (
            <div className="min-h-[50px]">
              <div>
                <span className="text-zinc-400 line-through">S/.{price}.00</span>
                <span className="ml-2">-{discount}%</span>
              </div>
              <div />
              <div>
                <span className="card__price font-bold text-orange-700">S/. {offert}.00</span>
              </div>
            </div>
          ) 
            : (
            <div className={`min-h-[50px]`}>
              <div>
                <span className="card__price font-bold text-orange-700">S/. {price}.00</span>
              </div>
            </div>
          )
        }
        </div>
      </div>
    </a>
  )
}
