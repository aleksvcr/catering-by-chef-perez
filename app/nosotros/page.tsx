import type { Metadata } from "next";
import { Footer, Header, WhatsAppLink } from "../site-components";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la propuesta de Catering by Chef Pérez: cocina de autor, servicio cercano y celebraciones hechas a la medida.",
};

export default function AboutPage() {
  return (
    <>
      <Header forceSolid />
      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-copy">
            <p className="eyebrow">Cocina de autor · Servicio cercano</p>
            <h1>Catering con intención.</h1>
            <p>
              Catering by Chef Pérez es un proyecto de catering, pasteles
              personalizados y repostería fundado y dirigido por Valeria, quien
              transforma cada ocasión en una experiencia personal y memorable.
            </p>
            <WhatsAppLink className="button button-dark">
              Hablemos de tu evento <span aria-hidden="true">↗</span>
            </WhatsAppLink>
          </div>
          <div className="about-hero-photo">
            <img
              src="/images/catering-croissant-platter.jpg"
              alt="Montaje preparado por Catering by Chef Pérez para un evento"
            />
            <span>Hecho a la medida</span>
          </div>
        </section>

        <section className="about-experience section-wrap">
          <div>
            <p className="eyebrow">Su forma de trabajar</p>
            <h2>Cuida la ocasión completa.</h2>
          </div>
          <div className="about-experience-copy">
            <p>
              Valeria escucha tu idea, entiende el ritmo de tu evento y diseña
              una propuesta coherente desde el menú hasta la presentación.
              Cada decisión se toma contigo y cada detalle recibe su atención
              directa.
            </p>
            <ul className="career-list" aria-label="Valores de Catering by Chef Pérez">
              <li>Propuestas personalizadas</li>
              <li>Preparación artesanal</li>
              <li>Presentación cuidada</li>
              <li>Atención directa</li>
            </ul>
          </div>
        </section>

        <section className="about-belief">
          <div className="about-belief-image">
            <img
              src="/images/catering-spread.jpg"
              alt="Selección de bocadillos preparada para un servicio de catering"
            />
          </div>
          <div className="about-belief-copy">
            <p className="eyebrow">El sello By Chef Pérez</p>
            <h2>Tu evento, servido con detalle.</h2>
            <p>
              Valeria diseña experiencias para eventos corporativos y sociales,
              cuidando personalmente el sabor, el servicio y la presentación
              para que tú disfrutes el momento.
            </p>
            <WhatsAppLink className="button button-light">
              Solicitar cotización <span aria-hidden="true">↗</span>
            </WhatsAppLink>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
