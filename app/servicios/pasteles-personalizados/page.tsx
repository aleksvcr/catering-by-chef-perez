import type { Metadata } from "next";
import { ServiceDetail } from "../../service-detail";

export const metadata: Metadata = { title: "Pasteles personalizados" };

export default function PastelesPage() {
  return <ServiceDetail
    eyebrow="Una pieza, una historia"
    number="02"
    title="Pasteles personalizados"
    intro="Un pastel diseñado para tu celebración, desde el sabor hasta el último detalle."
    heroImage="/images/cake-fresh-flowers.jpg"
    heroAlt="Pastel personalizado con flores frescas, higos y frambuesas"
    description="Traducimos tu ocasión, referencias y preferencias en una pieza única. Definimos contigo el estilo, los sabores y el tamaño para lograr un pastel especial por dentro y por fuera."
    includes={["Diseño personalizado", "Selección de sabores y rellenos", "Tamaño adecuado para tus invitados"]}
    galleryMode="grid"
    gallery={[
      { src: "/images/cake-fresh-flowers.jpg", alt: "Pastel floral con flores frescas", caption: "Flores y fruta para una ocasión especial" },
      { src: "/images/cake-minecraft.jpg", alt: "Pastel de dos pisos con temática Minecraft", caption: "Diseños temáticos hechos a la medida" },
      { src: "/images/cake-dog-birthday.jpg", alt: "Pastel de cumpleaños con recuerdos de un perro", caption: "Historias personales convertidas en pastel" },
      { src: "/images/cake-cars.jpg", alt: "Pastel infantil con temática de carreras", caption: "Celebraciones con sus personajes favoritos" },
    ]}
    message="Hola, me gustaría solicitar una cotización para un pastel personalizado."
  />;
}
