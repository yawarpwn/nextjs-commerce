import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export default function RichText({ details }) {
  const Details = () => documentToReactComponents(details)
  return (
    <>
      <Details />
      <style jsx global>
        {`
          .richText {
          }

          .richText h2 {
            font-size: 1rem;
            font-weight: bold;
            margin: 0;
            margin-bottom: 1rem;
          }

          .richText ul {
            list-style-type: circle;
            margin-left: 1rem;
          }

          .richText p {
            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  )
}
