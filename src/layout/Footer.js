import Logo from "@/components/Logo"
export default function Footer() {
  const footerLinks = [
    {
      title: "Recursos",
      links: [
        {
          title: "recurso 1",
          href: "#",
        },

        {
          title: "recurso 2",
          href: "#",
        },

        {
          title: "recurso 3",
          href: "#",
        },
      ],
    },
    {
      title: "Siguenos",
      links: [
        {
          title: "Facebook",
          href: "#",
        },

        {
          title: "Tiktok",
          href: "#",
        },

        {
          title: "Instagram",
          href: "#",
        },
      ],
    },
    {
      title: "Conocenos",
      links: [
        {
          title: "Quienes somos",
          href: "#",
        },

        {
          title: "Terminos y Condiciones",
          href: "#",
        },

        {
          title: "Politicas de uso",
          href: "#",
        },
      ],
    },
    {
      title: "Contacto",
      links: [
        {
          title: "Contactanos",
          href: "#",
        },

        {
          title: "Tienda",
          href: "#",
        },

        {
          title: "Como llegar",
          href: "#",
        },
      ],
    },
  ]
  return (
    <footer className="py-12">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid gap-12 xl:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p>
              Tienda de accesorio de motos y ropa, con gran variedad en marcas
              de castos certificados
            </p>
          </div>
          {footerLinks.map(({ links, title }, index) => {
            return (
              <div key={index}>
                <h3 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                  {title}
                </h3>
                <ul>
                  {links.map((link, i) => (
                    <li class="mb-4" key={i}>
                      <a
                        href={link.href}
                        class="font-normal text-gray-600 dark:text-gray-400 dark:hover:text-white hover:underline"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
        <hr class="my-8 border-gray-200 dark:border-gray-700 lg:my-12" />
        <span class="block text-center text-gray-600 dark:text-gray-400 ">
          © <span id="currentYear">2023</span>{" "}
          <a href="https://flowbite.com">MOTO CENTER</a>, Todo los derechos
          reservados.
        </span>
      </div>
    </footer>
  )
}
