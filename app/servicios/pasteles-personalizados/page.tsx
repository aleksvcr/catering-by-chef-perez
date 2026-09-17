import type { Metadata } from "next";
import { ServiceDetail } from "../../service-detail";

export const metadata: Metadata = { title: "Pasteles personalizados" };

export default function PastelesPage() {
  return <ServiceDetail
    eyebrow="Una pieza, una historia"
    number="02"
    title="Pasteles personalizados"
    intro="Un pastel diseñado para tu celebración, desde el sabor hasta el último detalle."
    heroImage="/images/custom-cake.jpg"
    heroAlt="Pastel personalizado decorado con flores rosas y blancas"
    description="Traducimos tu ocasión, referencias y preferencias en una pieza única. Definimos contigo el estilo, los sabores y el tamaño para lograr un pastel especial por dentro y por fuera."
    includes={["Diseño personalizado", "Selección de sabores y rellenos", "Tamaño adecuado para tus invitados"]}
    gallery={[
      { src: "/images/chef-valeria-about.jpg", alt: "Chef Valeria Pérez decorando un pastel", caption: "Preparación y decoración artesanal" },
      { src: "/images/custom-cake.jpg", alt: "Detalle de pastel floral personalizado", caption: "Una pieza creada para la ocasión" },
    ]}
    message="Hola, me gustaría solicitar una cotización para un pastel personalizado."
  />;
}
