import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`https://catering.example${pathname}`, {
      headers: {
        accept: "text/html",
        host: "catering.example",
        "x-forwarded-host": "catering.example",
        "x-forwarded-proto": "https",
      },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the complete Spanish landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="es"/i);
  assert.match(html, /<title>Catering by Chef Perez<\/title>/i);
  assert.match(html, /Catering · Pasteles · Repostería/);
  assert.match(html, /Hecho para/);
  assert.match(html, /hecha a la medida/);
  assert.match(html, /Pasteles personalizados/);
  assert.match(html, /Repostería/);
  assert.match(html, /https:\/\/wa\.me\/525561221199/);
  assert.match(html, /https:\/\/catering\.example\/og\.png/);
  assert.match(html, /\/images\/hero-event\.jpg/);
  assert.match(html, /\/servicios\/catering/);
  assert.match(html, /\/servicios\/pasteles-personalizados/);
  assert.match(html, /\/servicios\/reposteria/);
  assert.doesNotMatch(html, /images\.unsplash\.com/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Starter Project/i);
});

test("renders a distinct page for every service", async () => {
  const cases = [
    ["/servicios/catering", "Menús personalizados", "cotización de catering", true],
    ["/servicios/pasteles-personalizados", "Selección de sabores y rellenos", "pastel personalizado", false],
    ["/servicios/reposteria", "Mesas de postres", "cotización de repostería", true],
  ];

  for (const [pathname, uniqueCopy, message, hasCarousel] of cases) {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, new RegExp(uniqueCopy, "i"));
    assert.match(html, new RegExp(message, "i"));
    assert.match(html, /Solicitar cotización/);
    if (hasCarousel) {
      assert.match(html, /aria-roledescription="carrusel"/);
      assert.match(html, /Imagen anterior/);
      assert.match(html, /Siguiente imagen/);
    } else {
      assert.doesNotMatch(html, /aria-roledescription="carrusel"/);
      assert.match(html, /service-detail-gallery-grid/);
    }

    if (pathname === "/servicios/reposteria") {
      assert.doesNotMatch(html, /reposteria-dessert-cups\.jpg/);
    }
  }
});

test("renders the contact route with direct contact options", async () => {
  const response = await render("/contacto");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Cuéntale a Valeria qué quieres celebrar\./);
  assert.match(html, /\+52 55 6122 1199/);
  assert.match(html, /@catering\.bychefperez/);
  assert.match(html, /Continuar en WhatsApp/);
  assert.match(html, /name="servicio"/);
});

test("renders the company about page separately from the chef profile", async () => {
  const response = await render("/nosotros");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Catering con intención/);
  assert.match(html, /Propuestas personalizadas/);
  assert.doesNotMatch(html, /Rosewood Abu Dhabi/);

  const chefResponse = await render("/chef-valeria");
  assert.equal(chefResponse.status, 200);

  const chefHtml = await chefResponse.text();
  assert.match(chefHtml, /Valeria Pérez/);
  assert.match(chefHtml, /Rosewood Abu Dhabi/);
  assert.match(chefHtml, /Waldorf Astoria Riviera Maya/);
  assert.match(chefHtml, /Pierre Hermé/);
  assert.match(chefHtml, /Sud777/);
  assert.match(chefHtml, /chef-valeria-profile-side\.jpg/);
});
