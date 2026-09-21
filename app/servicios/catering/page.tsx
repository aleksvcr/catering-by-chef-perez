import type { Metadata } from "next";
import { ServiceDetail } from "../../service-detail";

export const metadata: Metadata = { title: "Catering" };

export default function CateringPage() {
  return <ServiceDetail
    eyebrow="Eventos a tu medida"
    number="01"
    title="Catering"
    intro="Menús, montaje y servicio coordinados para que tú puedas disfrutar el evento."
    heroImage="/images/catering-buffet.jpg"
    heroAlt="Mesa completa de catering preparada para un evento"
    description="Valeria diseña una propuesta de alimentos y presentación que responde al tipo de encuentro, número de invitados y ritmo del evento. Cada detalle se coordina directamente con ella."
    includes={["Menús personalizados", "Bocados dulces y salados", "Montaje y presentación para tu evento"]}
    gallery={[
      { src: "/images/catering-spread.jpg", alt: "Selección de bocadillos y fruta", caption: "Variedad pensada para compartir" },
      { src: "/images/catering-croissant-platter.jpg", alt: "Croissants rellenos de jamón, queso y vegetales", caption: "Opciones saladas para cada ocasión" },
      { src: "/images/catering-croissant-sandwiches.jpg", alt: "Croissants rellenos preparados para un evento", caption: "Bocados salados listos para compartir" },
      { src: "/images/catering-drinks.jpg", alt: "Bebidas servidas durante un evento", caption: "Servicio coordinado de principio a fin" },
      { src: "/images/catering-brand-detail.jpg", alt: "Tarjeta de Valeria Pérez entre flores del montaje", caption: "Una presentación con identidad propia" },
      { src: "/images/canapes.jpg", alt: "Canapés artesanales de salmón", caption: "Bocados preparados al detalle" },
    ]}
    message="Hola, me gustaría solicitar una cotización de catering para mi evento."
  />;
}
