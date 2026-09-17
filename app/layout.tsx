import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: {
      default: "Catering by Chef Perez",
      template: "%s · Catering by Chef Perez",
    },
    description:
      "Catering, pasteles personalizados y repostería artesanal preparados por Chef Perez para eventos y celebraciones.",
    openGraph: {
      title: "Catering by Chef Perez",
      description:
        "Propuestas hechas a la medida para celebrar, compartir y hacer memorable cada ocasión.",
      type: "website",
      locale: "es_MX",
      images: [
        {
          url: new URL("/og.png", metadataBase).toString(),
          width: 1731,
          height: 909,
          alt: "Catering by Chef Perez — Hecho para celebrar.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Catering by Chef Perez",
      description: "Propuestas hechas a la medida para celebrar.",
      images: [new URL("/og.png", metadataBase).toString()],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
