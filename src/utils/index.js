import slugify from 'slugify'

export const nameToSlug = (name) => slugify(name, { lower: true })

export function getDiscount({ price, offert }) {
  return (((price - offert) * 100) / price).toFixed(0)
}
