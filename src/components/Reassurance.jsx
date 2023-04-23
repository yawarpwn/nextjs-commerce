export default function Reassurance () {
  return (
  <>
      <div className="reassurance">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 px-4">
          <div className="reassurance-box">
            <img
              className="img-fluid"
              src="/assets/icons/icono-devolucion.svg"
              alt="Devolución fácil y gratis. Nos encargamos de todo"
            />
            <div className="block-reassurance-text">
              <p className="h6">Devolución fácil y gratis.</p>
              <p className="h6 block-reassurance-description">
                Nos encargamos de todo
              </p>
            </div>
          </div>

          <div className="reassurance-box">
            <img
              className="img-fluid"
              src="/assets/icons/icono-enviograt.svg"
              alt="Envío gratis a partir de S/200.00 "
            />
            <div className="block-reassurance-text">
              <p className="h6">Envío gratis a partir de S/200.00</p>
            </div>
          </div>
          <div className="reassurance-box">
            <img
              className="img-fluid"
              src="/assets/icons/icono-dudas.svg"
              alt="Resolvemos todas tus dudas "
            />
            <div className="block-reassurance-text">
              <p className="h6">Resolvemos todas tus dudas</p>
            </div>
          </div>
          <div className="reassurance-box">
            <img
              className="img-fluid"
              src="/assets/icons/icono-enviourg.svg"
              alt="¿Aprieta el crono? Elige envío urgente 24h"
            />
            <div className="block-reassurance-text">
              <p className="h6">¿Aprieta el crono?</p>
              <p className="h6 block-reassurance-description">
                Elige envío urgente 24h
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .icon-wrapper {
          display: flex;
          align-items: center;
        }
        .reassurance {
          padding-top: 40px;
          padding-bottom: 40px;
          background: #ee1b00;
          color: #fff;
        }
        .reassurance-box {
          display: flex;
          align-items: center;
        }
        .reassurance img {
          max-width: 40px;
          margin-right: 10px;
        }
      `}</style>
  </>
  )
}
