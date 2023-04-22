export default function MobileNavigation({ open }) {
  return (
    <>
      <div className="mobileNavigation-wrapper">
        Mobile Navigation
      </div>
      <style jsx global>
        {`
          .mobileNavigation--open {
            display: block;
          }
          .mobileNavigation-wrapper {
            --page-margin: 24px;
            --page-with-margin: 1200px + calc(24px * 2);
            display: none;
            max-width: 100%;
            margin-left: auto;
            margin-right: auto;
            width: var(--page-with-margin);
            padding-left: var(--page-margin);
            padding-right: var(--page-margin);
          }
        `}
      </style>
    </>
  )
}
