import Link from "next/link";
import { Footer, Header, Hero, WhatsAppLink } from "./site-components";

const services = [
  {
    number: "01",
    title: "Catering",
    subtitle: "Eventos a tu medida",
    description:
      "Menús y montajes pensados para el ritmo, el estilo y la escala de tu celebración.",
    image: "/images/catering-spread.jpg",
    alt: "Servicio de catering con bocadillos y fruta fresca",
    href: "/servicios/catering",
  },
  {
    number: "02",
    title: "Pasteles personalizados",
    subtitle: "Una pieza, una historia",
    description:
      "Diseños únicos que parten de tu ocasión y terminan en un pastel que se siente completamente tuyo.",
    image: "/images/custom-cake.jpg",
    alt: "Pastel personalizado con flores rosas y blancas",
    href: "/servicios/pasteles-personalizados",
  },
  {
    number: "03",
    title: "Repostería",
    subtitle: "Hecha artesanalmente",
    description:
      "Piezas dulces, mesas de postres y pequeños bocados preparados detalle a detalle.",
    image: "/images/pastry.jpg",
    alt: "Croissants artesanales de almendra",
    href: "/servicios/reposteria",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <section className="story section-wrap" id="nosotros">
          <div className="story-lead">
            <p className="eyebrow">Cocina de autor · Servicio cercano</p>
            <h2>
              Celebrar bien empieza por cuidar <em>cada detalle.</em>
            </h2>
          </div>
          <div className="story-notes">
            <p>
              Catering by Chef Perez es una empresa establecida y dirigida por
              una chef. Creamos experiencias de catering, pasteles y repostería
              que se sienten personales desde la primera conversación.
            </p>
            <p>
              Escuchamos tu idea, entendemos la ocasión y construimos una
              propuesta hecha a la medida, con atención directa y preparación
              artesanal.
            </p>
            <dl className="story-facts">
              <dt>Enfoque</dt><dd>Personalizado</dd>
              <dt>Especialidad</dt><dd>Catering y repostería</dd>
              <dt>Atención</dt><dd>Directa con la chef</dd>
            </dl>
            <Link className="text-link story-link" href="/chef-valeria">
              Conoce a la chef <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section className="services" id="servicios" aria-labelledby="services-title">
          <div className="section-wrap">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Lo que hacemos</p>
                <h2 id="services-title">Tres formas de celebrar.</h2>
              </div>
              <p>
                Propuestas cuidadas, sencillas de contratar y pensadas para que
                disfrutes la ocasión tanto como tus invitados.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" id={`servicio-${service.number}`} key={service.title}>
                  <Link className="service-image" href={service.href} aria-label={`Ver ${service.title}`}>
                    <img src={service.image} alt={service.alt} />
                    <span className="service-number">{service.number}</span>
                  </Link>
                  <div className="service-copy">
                    <p className="service-subtitle">{service.subtitle}</p>
                    <h3><Link href={service.href}>{service.title}</Link></h3>
                    <p>{service.description}</p>
                    <Link className="text-link" href={service.href}>Ver servicio <span aria-hidden="true">→</span></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery-strip section-wrap" aria-label="Selección de nuestro trabajo">
          <figure className="gallery-large">
            <img src="/images/event-table.jpg" alt="Mesa de catering preparada para un evento" />
            <figcaption>Montaje y servicio · Eventos</figcaption>
          </figure>
          <figure>
            <img src="/images/canapes.jpg" alt="Canapés de salmón preparados para servir" />
            <figcaption>Bocados salados · Catering</figcaption>
          </figure>
        </section>

        <section className="chef-story" id="chef">
          <div className="chef-image">
            <img src="/images/chef-valeria-about.jpg" alt="Chef Valeria Perez decorando un pastel artesanal" />
            <span className="image-caption">La chef detrás de cada detalle</span>
          </div>
          <div className="chef-copy">
            <p className="eyebrow">Oficio y atención personal</p>
            <h2>Hecho por una chef. Pensado para ti.</h2>
            <p>
              La firma de Chef Perez está en la selección del menú, la textura
              de cada postre y la presentación final. Tú disfrutas el momento;
              nosotros cuidamos el resto.
            </p>
            <div className="chef-values">
              <div><strong>01</strong><span>Propuestas personalizadas</span></div>
              <div><strong>02</strong><span>Preparación artesanal</span></div>
              <div><strong>03</strong><span>Atención directa</span></div>
            </div>
          </div>
        </section>

        <section className="process section-wrap" id="proceso">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Así trabajamos</p>
              <h2>Simple, cercano y a tu medida.</h2>
            </div>
            <p>De tu primera idea al momento de servir, te acompañamos en cada decisión.</p>
          </div>
          <ol className="process-list">
            <li><span className="process-number">01</span><h3>Cuéntanos tu idea</h3><p>Fecha, número de personas, tipo de evento y lo que te gustaría crear.</p></li>
            <li><span className="process-number">02</span><h3>Diseñamos la propuesta</h3><p>Construimos una opción personalizada para tu ocasión y presupuesto.</p></li>
            <li><span className="process-number">03</span><h3>Cuidamos el resto</h3><p>Preparamos cada detalle para que tú puedas disfrutar el momento.</p></li>
          </ol>
        </section>

        <section className="quote-banner">
          <div className="quote-photo" aria-hidden="true" />
          <div className="quote-content">
            <p className="eyebrow">Tu celebración empieza aquí</p>
            <h2>Hablemos de lo que tienes en mente.</h2>
            <p>Cuéntanos la ocasión y te ayudamos a convertirla en una propuesta hecha especialmente para ti.</p>
            <WhatsAppLink className="button button-light">
              Cotizar por WhatsApp <span aria-hidden="true">↗</span>
            </WhatsAppLink>
          </div>
        </section>

        <section className="faq section-wrap" aria-labelledby="faq-title">
          <div><p className="eyebrow">Preguntas frecuentes</p><h2 id="faq-title">Antes de comenzar.</h2></div>
          <div className="faq-list">
            <details><summary>¿Con cuánta anticipación debo cotizar?</summary><p>Entre más pronto nos cuentes tu idea, mejor podremos cuidar cada detalle. La disponibilidad depende de la fecha y el servicio.</p></details>
            <details><summary>¿Los menús y pasteles son personalizados?</summary><p>Sí. Cada propuesta parte de tu ocasión, preferencias, número de invitados y presupuesto.</p></details>
            <details><summary>¿Cómo solicito una cotización?</summary><p>Escríbenos por WhatsApp con la fecha, tipo de evento y número aproximado de personas. Te responderemos para afinar los detalles.</p></details>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
