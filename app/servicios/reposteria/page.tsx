import type { Metadata } from "next";
import { ServiceDetail } from "../../service-detail";

export const metadata: Metadata = { title: "Repostería" };

export default function ReposteriaPage() {
  return <ServiceDetail
    eyebrow="Hecha artesanalmente"
    number="03"
    title="Repostería"
    intro="Piezas dulces y mesas de postres preparadas para compartir, regalar y celebrar."
    heroImage="/images/pastry.jpg"
    heroAlt="Croissants artesanales de almendra"
    description="Preparamos selecciones de repostería con equilibrio entre sabor y presentación. Podemos crear desde una pequeña variedad para una reunión hasta una mesa dulce completa."
    includes={["Selecciones de piezas dulces", "Mesas de postres", "Cantidades adaptadas a cada evento"]}
    gallery={[
      { src: "/images/pastry.jpg", alt: "Croissants artesanales de almendra", caption: "Horneado artesanal" },
      { src: "/images/reposteria-conchas.jpg", alt: "Conchas tradicionales en un montaje de repostería", caption: "Piezas tradicionales con presentación cuidada", position: "center 64%" },
      { src: "/images/reposteria-mini-croissants.jpg", alt: "Mini croissants de chocolate servidos en mesa", caption: "Porciones pensadas para compartir" },
      { src: "/images/reposteria-pan-dulce.jpg", alt: "Selección de pan dulce y mini croissants", caption: "Una selección horneada para cada ocasión" },
    ]}
    message="Hola, me gustaría solicitar una cotización de repostería."
  />;
}
