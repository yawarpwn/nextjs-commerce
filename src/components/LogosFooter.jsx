const logos = [
  {
    img: '/assets/logos/logo-1.jpg',
    title: 'Logo de tal marca',
  },

  {
    img: '/assets/logos/logo-2.jpg',
    title: 'Logo de tal marca',
  },

  {
    img: '/assets/logos/logo-3.jpg',
    title: 'Logo de tal marca',
  },

  {
    img: '/assets/logos/logo-4.jpg',
    title: 'Logo de tal marca',
  },

  {
    img: '/assets/logos/logo-5.jpg',
    title: 'Logo de tal marca',
  },

  {
    img: '/assets/logos/logo-6.jpg',
    title: 'Logo de tal marca',
  },
]
export default function LogosFooter() {
  return (
    <section className="max-w-7xl mx-auto px-4 w-full py-12">
      <h2 className="text-2xl font-bold text-center">Nuestras marcas</h2>
      <ul className="grid  grid-cols-2 lg:grid-cols-6 items-center justify-center gap-4">
        {logos.map(({ img, title }, index) => (
          <li className="flex justify-center" key={index}>
            <a href="#">
              <img className="invert w-32" src={img} alt={`Logo de ${title}`} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
