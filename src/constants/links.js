const PHONE_NUMBER = '930528935'
const textWhatsapp = 'Hola, Vengo de la pagina estoy interesado en sus productos'
const BASE_WHATSAPP = `https://api.whatsapp.com/send?phone=51${PHONE_NUMBER}`
export const WHATSAPP_LINK = `${BASE_WHATSAPP}&text=${textWhatsapp}`

export const generateWhatsappLink = ({link, name}) => {
  const textWithLink = `${BASE_WHATSAPP}&text=Hola, Quiero consultar por ${name} , este es su enlace : ${link}` 
  return textWithLink 
}

