"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

const phoneDisplay = "+52 55 6122 1199";
const phoneDial = "+525561221199";
const instagram =
  "https://www.instagram.com/catering.bychefperez?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export function WhatsAppLink({
  children,
  className,
  message = "Hola, me gustaría solicitar una cotización para mi evento.",
}: {
  children: ReactNode;
  className?: string;
  message?: string;
}) {
  const href = `https://wa.me/525561221199?text=${encodeURIComponent(message)}`;
  return <a className={className} href={href} target="_blank" rel="noreferrer">{children}</a>;
}

export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="Catering by Chef Perez, inicio">
      <b>Catering</b>
      <span>by Chef Perez</span>
    </Link>
  );
}

export function Header({ forceSolid = false }: { forceSolid?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solid, setSolid] = useState(forceSolid);

  useEffect(() => {
    const update = () => {
      setSolid(forceSolid || window.scrollY > 54 || window.location.pathname !== "/");
      if (window.innerWidth > 920) setMenuOpen(false);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [forceSolid]);

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className={`site-header${solid ? " is-solid" : ""}${menuOpen ? " menu-active" : ""}`}>
      <Brand />
      <button
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        onClick={() => menuOpen ? closeMenu() : setMenuOpen(true)}
      >
        <span /><span /><span />
        <span className="sr-only">Abrir menú</span>
      </button>
      <nav className={menuOpen ? "main-nav is-open" : "main-nav"} id="main-nav" aria-label="Principal">
        <Link href="/nosotros" onClick={closeMenu}>Nosotros</Link>
        <Link href="/chef-valeria" onClick={closeMenu}>La chef</Link>
        <div className="nav-dropdown">
          <button type="button" aria-expanded={servicesOpen} onClick={() => setServicesOpen((open) => !open)}>
            Servicios <span aria-hidden="true">⌄</span>
          </button>
          <div className={servicesOpen ? "dropdown-panel is-open" : "dropdown-panel"}>
            <Link href="/servicios/catering" onClick={closeMenu}>Catering</Link>
            <Link href="/servicios/pasteles-personalizados" onClick={closeMenu}>Pasteles personalizados</Link>
            <Link href="/servicios/reposteria" onClick={closeMenu}>Repostería</Link>
          </div>
        </div>
        <Link href="/#proceso" onClick={closeMenu}>Cómo funciona</Link>
        <Link href="/contacto" onClick={closeMenu}>Contacto</Link>
      </nav>
      <WhatsAppLink className="header-cta">Cotizar</WhatsAppLink>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-label="Catering by Chef Perez">
      <div className="hero-copy">
        <div>
          <p className="hero-kicker">Catering · Pasteles · Repostería</p>
          <h1>Hecho para <em>celebrar.</em></h1>
          <p className="hero-intro">Propuestas personales, cuidadas y preparadas por una chef para hacer memorable cada ocasión.</p>
          <div className="hero-actions">
            <WhatsAppLink className="button button-accent">Cotizar un evento</WhatsAppLink>
            <a className="button button-outline" href="#servicios">Ver servicios</a>
          </div>
        </div>
        <div className="hero-meta">
          <span>CDMX</span><span>Atención directa</span><span>Hecho a la medida</span>
        </div>
      </div>
      <div className="hero-photo">
        <img src="/images/hero-event.jpg" alt="Mesa de postres preparada por Catering by Chef Perez" />
        <span>Evento corporativo · Mesa de postres</span>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top section-wrap">
        <Brand />
        <p>Hecho con intención.<br />Servido con detalle.</p>
      </div>
      <div className="footer-links section-wrap">
        <div>
          <span>Explora</span>
          <Link href="/#servicios">Servicios</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/chef-valeria">La Chef</Link>
          <Link href="/contacto">Contacto</Link>
        </div>
        <div>
          <span>Conversemos</span>
          <a href={`tel:${phoneDial}`}>{phoneDisplay}</a>
          <a href={instagram} target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© {new Date().getFullYear()} Catering by Chef Perez</span>
        <span>Todos los derechos reservados</span>
      </div>
    </footer>
  );
}
