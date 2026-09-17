import type { Metadata } from "next";
import { ServiceDetail } from "../../service-detail";

export const metadata: Metadata = { title: "Catering" };

export default function CateringPage() {
  return <ServiceDetail
    eyebrow="Eventos a tu medida"
    number="01"
    title="Catering"
    intro="Menús, montaje y servicio coordinados para que tú puedas disfrutar el evento."
    heroImage="/images/event-table.jpg"
    heroAlt="Mesa completa de catering preparada para un evento"
    description="Diseñamos una propuesta de alimentos y presentación que responde al tipo de encuentro, número de invitados y ritmo del evento. Cada detalle se coordina directamente con la chef."
    includes={["Menús personalizados", "Bocados dulces y salados", "Montaje y presentación para tu evento"]}
    gallery={[
      { src: "/images/catering-spread.jpg", alt: "Selección de bocadillos y fruta", caption: "Variedad pensada para compartir" },
      { src: "/images/canapes.jpg", alt: "Canapés artesanales de salmón", caption: "Bocados preparados al detalle" },
    ]}
    message="Hola, me gustaría solicitar una cotización de catering para mi evento."
  />;
}
