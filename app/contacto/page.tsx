"use client";

import { FormEvent, useState } from "react";
import { Footer, Header } from "../site-components";

const instagram =
  "https://www.instagram.com/catering.bychefperez?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export default function Contacto() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Hola, me gustaría solicitar una cotización.",
      `Nombre: ${data.get("nombre")}`,
      `Tipo de servicio: ${data.get("servicio")}`,
      `Fecha: ${data.get("fecha") || "Por definir"}`,
      `Personas: ${data.get("personas") || "Por definir"}`,
      `Detalles: ${data.get("detalles") || "Sin detalles adicionales"}`,
    ].join("\n");
    window.open(
      `https://wa.me/525561221199?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  }

  return (
    <>
      <Header forceSolid />
      <main className="contact-page">
        <section className="contact-intro">
          <p className="eyebrow">Contacto</p>
          <h1>Cuéntanos qué quieres celebrar.</h1>
          <p>
            Compártenos los primeros detalles. Prepararemos contigo una
            propuesta pensada para tu ocasión.
          </p>
        </section>
        <section className="contact-layout">
          <div className="contact-details">
            <p className="eyebrow">Hablemos</p>
            <h2>Estamos a un mensaje de distancia.</h2>
            <div className="contact-method">
              <span>Teléfono / WhatsApp</span>
              <a href="tel:+525561221199">+52 55 6122 1199</a>
            </div>
            <div className="contact-method">
              <span>Instagram</span>
              <a href={instagram} target="_blank" rel="noreferrer">
                @catering.bychefperez ↗
              </a>
            </div>
            <p className="contact-note">
              ¿Prefieres correo? Compártenos la dirección de contacto de la
              marca y la añadiremos aquí.
            </p>
          </div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row">
              <label>
                Nombre
                <input name="nombre" type="text" autoComplete="name" required />
              </label>
              <label>
                Servicio
                <select name="servicio" required defaultValue="">
                  <option value="" disabled>
                    Selecciona una opción
                  </option>
                  <option>Catering</option>
                  <option>Pastel personalizado</option>
                  <option>Repostería</option>
                  <option>Otro</option>
                </select>
              </label>
            </div>
            <div className="form-row">
              <label>
                Fecha del evento
                <input name="fecha" type="date" />
              </label>
              <label>
                Número de personas
                <input name="personas" type="number" min="1" inputMode="numeric" />
              </label>
            </div>
            <label>
              Cuéntanos un poco más
              <textarea
                name="detalles"
                rows={5}
                placeholder="Tipo de evento, ubicación, sabores o ideas que tienes en mente…"
              />
            </label>
            <button className="button button-dark" type="submit">
              Continuar en WhatsApp <span aria-hidden="true">↗</span>
            </button>
            {sent && (
              <p className="form-confirmation" role="status">
                Abrimos WhatsApp con tu información lista para enviar.
              </p>
            )}
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}
