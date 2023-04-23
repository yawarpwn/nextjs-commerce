import Head from 'next/head'
import { config } from '@/config'
import { useRouter } from 'next/router'

export default function SEO({ title, description, image }) {
  const DEFAULT_TITLE = `Tienda de Accesorio de Motos y ropa | ${config.TITLE}`
  const router = useRouter()
  const canonicalUrl = (
    config.URL + (router.asPath === '/' ? '' : router.asPath)
  ).split('?')[0]

  const ogImage = new URL(image, config.URL)
  const DEFAULT_IMAGE = new URL(config.IMAGE, config.URL)

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
      <meta property="og:image" content={image ? ogImage : DEFAULT_IMAGE} />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
