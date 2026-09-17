import Link from "next/link";
import { Footer, Header, WhatsAppLink } from "./site-components";

export type ServiceDetailProps = {
  eyebrow: string;
  title: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  number: string;
  description: string;
  includes: string[];
  gallery: Array<{ src: string; alt: string; caption: string }>;
  message: string;
};

export function ServiceDetail(props: ServiceDetailProps) {
  return (
    <>
      <Header forceSolid />
      <main className="service-page">
        <section className="service-detail-hero">
          <div className="service-detail-title">
            <p className="eyebrow">{props.eyebrow}</p>
            <span>{props.number}</span>
            <h1>{props.title}</h1>
            <p>{props.intro}</p>
            <WhatsAppLink className="button button-accent" message={props.message}>
              Solicitar cotización <span aria-hidden="true">↗</span>
            </WhatsAppLink>
          </div>
          <div className="service-detail-photo">
            <img src={props.heroImage} alt={props.heroAlt} />
          </div>
        </section>

        <section className="service-detail-about section-wrap">
          <div>
            <p className="eyebrow">La propuesta</p>
            <h2>Una experiencia pensada alrededor de tu ocasión.</h2>
          </div>
          <div>
            <p>{props.description}</p>
            <ul>
              {props.includes.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>

        <section className="service-detail-gallery section-wrap" aria-label={`Galería de ${props.title}`}>
          {props.gallery.map((image) => (
            <figure key={image.src}>
              <img src={image.src} alt={image.alt} />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </section>

        <section className="service-detail-cta">
          <p className="eyebrow">Siguiente paso</p>
          <h2>Cuéntanos qué tienes en mente.</h2>
          <p>Fecha, número de personas y la idea general son suficientes para comenzar.</p>
          <div>
            <WhatsAppLink className="button button-light" message={props.message}>Cotizar por WhatsApp <span aria-hidden="true">↗</span></WhatsAppLink>
            <Link className="button button-outline" href="/contacto">Ir a contacto</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
