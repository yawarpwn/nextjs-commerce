import Head from 'next/head'
import { config } from '@/config'
import { useRouter } from 'next/router'

export default function SEO({ title, description, image }) {
  const DEFAULT_TITLE = `Tienda de Accesorio de Motos y ropa | ${config.TITLE}`
  const router = useRouter()
  const canonicalUrl = (
    config.URL + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]

  return (
    <Head>
      {/* Basic */}
      <title>{title ? `${title} | ${config.TITLE}` : DEFAULT_TITLE}</title>
      <link rel="canonical" href={canonicalUrl} key="canonical" />
      <meta name="description" content={description} key="desc" />

      {/* OpenGraph */}
      <meta
        property="og:title"
        content={title ? `${title} | ${config.TITLE}` : DEFAULT_TITLE}
      />
      <meta
        property="og:description"
        content={description ? description : config.DESCRIPTION}
      />
      <meta property="og:image" content={image ? image : config.IMAGE} />
    </Head>
  )
}
