import ToggleMenu from "@/components/ToggleMenu";
import { useState } from "react";
export default function Header() {
  const navigation = [
    {
      title: "Productos",
      href: "/productos",
    },
    {
      title: "Nosotros",
      href: "/nosotros",
    },
    {
      title: "Contacto",
      href: "/contacto",
    },
  ];

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  return (
    <>
      <header className="h-16 border flex items-center">
        <nav className="flex justify-between items-center w-full px-4">
          <a className="uppercase font-extrabold">
            <span className="">MOTO</span>
            <span className="text-orange-500 font-light">Center</span>
          </a>
          <ToggleMenu open={open} handleOpen={handleOpen} />
        </nav>
      </header>
      {
      open && 
      <ul className="px-4 gap-4">
        {navigation.map(({ title, href }) => (
          <li className="p-4 text-center" key={title}>
            <a href={href}>{title}</a>
          </li>
        ))}
      </ul>
    }
    </>
  );
}
