import type { Metadata } from "next";
import { Footer, Header, WhatsAppLink } from "../site-components";

export const metadata: Metadata = {
  title: "Chef Valeria Pérez",
  description:
    "Conoce a Valeria Pérez, chef profesional y fundadora de Catering by Chef Pérez.",
};

export default function ChefValeriaPage() {
  return (
    <>
      <Header forceSolid />
      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-copy">
            <p className="eyebrow">La chef detrás de cada detalle</p>
            <h1>Valeria Pérez</h1>
            <p>
              Chef profesional y fundadora de Catering by Chef Pérez. Su cocina
              une técnica, hospitalidad y una atención cercana para convertir
              cada evento en una experiencia memorable.
            </p>
            <WhatsAppLink className="button button-dark">
              Hablemos de tu evento <span aria-hidden="true">↗</span>
            </WhatsAppLink>
          </div>
          <div className="about-hero-photo">
            <img
              src="/images/chef-valeria-profile-side.jpg"
              alt="Chef Valeria Pérez mirando hacia un costado"
            />
            <span>Chef y fundadora</span>
          </div>
        </section>

        <section className="about-experience section-wrap">
          <div>
            <p className="eyebrow">Trayectoria</p>
            <h2>Experiencia que se siente en el servicio.</h2>
          </div>
          <div className="about-experience-copy">
            <p>
              Su formación incluye experiencias en conceptos gastronómicos de
              alto nivel, donde consolidó una visión basada en la excelencia,
              la presentación y el cuidado de cada invitado.
            </p>
            <ul className="career-list" aria-label="Experiencia profesional">
              <li>Rosewood Abu Dhabi</li>
              <li>Waldorf Astoria Riviera Maya</li>
              <li>Pierre Hermé</li>
              <li>Sud777</li>
            </ul>
          </div>
        </section>

        <section className="about-belief">
          <div className="about-belief-image">
            <img
              src="/images/chef-valeria-profile-front.jpg"
              alt="Retrato de Chef Valeria Pérez"
              style={{ objectPosition: "center 32%" }}
            />
          </div>
          <div className="about-belief-copy">
            <p className="eyebrow">El sello By Chef Pérez</p>
            <h2>Sabor, presentación y tranquilidad.</h2>
            <p>
              Valeria diseña propuestas personalizadas para eventos corporativos
              y sociales. Ella supervisa cada montaje y cuida personalmente los
              detalles para que tú puedas disfrutar el momento.
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
