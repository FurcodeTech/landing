import { useEffect, useRef, useState } from "react";

type OfferCardProps = {
  title: string;
  description: string;
  tag: string;
  items: string[];
  result: string;
  index: number;
  opensProducts?: boolean;
};

type Product = {
  name: string;
  eyebrow: string;
  description: string;
  href: string;
  trial: string;
};

const products: Product[] = [
  {
    name: "Backoffice",
    eyebrow: "Gestión para comercios",
    description:
      "Centralizá ventas, stock, compras y proveedores en un espacio simple para todo tu equipo.",
    href: "https://backoffice-furcode.vercel.app",
    trial: "Free trial · 2 semanas",
  },
];

const offers: OfferCardProps[] = [
  {
    index: 0,
    tag: "Productos",
    title: "Nuestros productos",
    description:
      "Apps listas para usar, creadas para resolver tareas reales y acompañar el crecimiento de tu negocio.",
    result: "Conocé las herramientas que ya podés probar y las que estamos preparando.",
    items: ["Apps propias", "Listas para usar", "Prueba gratis"],
    opensProducts: true,
  },
  {
    index: 1,
    tag: "Servicio",
    title: "Implementación IT",
    description:
      "Acompañamiento para ordenar procesos, elegir herramientas y dejar sistemas funcionando sin ruido operativo.",
    result: "Para bajar fricción y ganar control sin sumar complejidad.",
    items: ["Diagnóstico", "Puesta en marcha", "Soporte"],
  },
  {
    index: 2,
    tag: "Formación",
    title: "Academia práctica",
    description:
      "Capacitación directa para equipos y profesionales que necesitan usar tecnología con seguridad y autonomía.",
    result: "Para que el equipo use mejor la herramienta desde el día uno.",
    items: ["Equipos", "Procesos", "Criterio técnico"],
  },
];

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      className={`size-4 ${direction === "left" ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5 12h14m-5-5 5 5-5 5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ProductThumbnail() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[16/10] overflow-hidden rounded-[1.2rem] border border-slate-200 bg-[#f8f5ee] p-3 shadow-inner sm:p-4"
    >
      <div className="absolute -right-10 -top-12 size-36 rounded-full bg-amber-200/50 blur-2xl" />
      <div className="relative flex h-full overflow-hidden rounded-xl border border-white/90 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.1)]">
        <div className="w-[24%] border-r border-slate-100 bg-slate-950 p-2 sm:p-3">
          <div className="size-5 rounded-md bg-amber-300" />
          <div className="mt-4 space-y-2">
            <span className="block h-1.5 w-full rounded-full bg-white/30" />
            <span className="block h-1.5 w-3/4 rounded-full bg-white/15" />
            <span className="block h-1.5 w-4/5 rounded-full bg-white/15" />
          </div>
        </div>
        <div className="flex-1 bg-slate-50/80 p-2.5 sm:p-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="block h-2 w-20 rounded-full bg-slate-900/80" />
              <span className="mt-1.5 block h-1.5 w-12 rounded-full bg-slate-300" />
            </div>
            <span className="h-5 w-12 rounded-md bg-amber-300" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-2">
            {["bg-emerald-100", "bg-amber-100", "bg-sky-100"].map((color) => (
              <div key={color} className={`rounded-md ${color} p-1.5 sm:p-2`}>
                <span className="block h-1 w-3/4 rounded-full bg-slate-500/30" />
                <span className="mt-2 block h-2 w-1/2 rounded-full bg-slate-800/70" />
              </div>
            ))}
          </div>
          <div className="mt-2 rounded-md border border-slate-100 bg-white p-2 sm:mt-3">
            <div className="flex items-end gap-1">
              {[35, 55, 42, 70, 60, 82, 72].map((height, index) => (
                <span
                  key={`${height}-${index}`}
                  className="flex-1 rounded-t-sm bg-slate-800/70"
                  style={{ height: `${height / 4}px` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductSlide({ product }: { product: Product }) {
  return (
    <div className="w-full shrink-0 px-0.5">
      <a
        href={product.href}
        target="_blank"
        rel="noreferrer"
        className="group/product grid gap-5 rounded-[1.55rem] border border-slate-200 bg-white p-4 shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-[0_20px_50px_rgba(15,23,42,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 sm:grid-cols-[1.05fr_0.95fr] sm:p-5"
      >
        <ProductThumbnail />
        <div className="flex flex-col justify-center sm:py-2">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
            {product.eyebrow}
          </span>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
            {product.name}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800 ring-1 ring-inset ring-emerald-200">
              {product.trial}
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-950">
              Probar Backoffice
              <ArrowIcon />
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

function ProductsModal({
  isOpen,
  onClose,
  returnFocusRef,
}: {
  isOpen: boolean;
  onClose: () => void;
  returnFocusRef: React.RefObject<HTMLButtonElement | null>;
}) {
  const [activeProduct, setActiveProduct] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const returnFocusElement = returnFocusRef.current;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) return;

      const focusable = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      returnFocusElement?.focus();
    };
  }, [isOpen, onClose, returnFocusRef]);

  if (!isOpen) return null;

  const showControls = products.length > 1;
  const goToProduct = (index: number) => {
    setActiveProduct((index + products.length) % products.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/55 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="products-modal-title"
        aria-describedby="products-modal-description"
        className="max-h-[92dvh] w-full overflow-y-auto rounded-t-[2rem] border border-white/70 bg-[#fbfaf7] p-5 shadow-[0_30px_90px_rgba(15,23,42,0.3)] sm:max-w-4xl sm:rounded-[2rem] sm:p-7 lg:p-8"
      >
        <div className="flex items-start justify-between gap-5">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
              Productos Furcode
            </p>
            <h2
              id="products-modal-title"
              className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl"
            >
              Tecnología lista para trabajar con vos.
            </h2>
            <p
              id="products-modal-description"
              className="mt-3 text-sm leading-7 text-slate-600 sm:text-base"
            >
              Explorá nuestras apps, probalas sin compromiso y elegí la que mejor acompaña tu
              operación.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Cerrar productos"
            className="grid size-10 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-xl text-slate-600 shadow-sm transition hover:border-slate-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <div className="mt-6 overflow-hidden sm:mt-7">
          <div
            className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${activeProduct * 100}%)` }}
          >
            {products.map((product) => (
              <ProductSlide key={product.name} product={product} />
            ))}
          </div>
        </div>

        <div className="mt-5 flex min-h-10 items-center justify-between gap-4">
          <div className="flex items-center gap-2" aria-label="Seleccionar producto">
            {products.map((product, index) => (
              <button
                key={product.name}
                type="button"
                onClick={() => goToProduct(index)}
                aria-label={`Ver ${product.name}`}
                aria-current={activeProduct === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 ${
                  activeProduct === index ? "w-8 bg-slate-950" : "w-2.5 bg-slate-300"
                }`}
              />
            ))}
          </div>

          {showControls && (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goToProduct(activeProduct - 1)}
                aria-label="Producto anterior"
                className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-amber-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <ArrowIcon direction="left" />
              </button>
              <button
                type="button"
                onClick={() => goToProduct(activeProduct + 1)}
                aria-label="Producto siguiente"
                className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-amber-300 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <ArrowIcon />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function OfferCard({
  title,
  description,
  tag,
  items,
  result,
  index,
  opensProducts,
  onOpenProducts,
  triggerRef,
}: OfferCardProps & {
  onOpenProducts: () => void;
  triggerRef?: React.RefObject<HTMLButtonElement | null>;
}) {
  const content = (
    <>
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          {tag}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
          0{index + 1}
        </span>
      </div>

      <h3 className="mt-4 text-left text-lg font-semibold tracking-tight text-slate-950 sm:mt-5 sm:text-xl">
        {title}
      </h3>
      <p className="mt-3 text-left text-sm leading-7 text-slate-600">{description}</p>

      <p className="mt-4 rounded-[1rem] border border-amber-200/80 bg-amber-50 px-3 py-3 text-left text-sm font-medium leading-6 text-amber-900">
        {result}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2 sm:mt-6">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 ring-1 ring-slate-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );

  const cardClassName =
    "group flex h-full w-full flex-col rounded-[1.65rem] border border-slate-200/80 bg-white/[0.86] p-4 shadow-[0_20px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_24px_60px_rgba(15,23,42,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 sm:p-5";

  if (opensProducts) {
    return (
      <button ref={triggerRef} type="button" onClick={onOpenProducts} className={cardClassName}>
        {content}
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 underline decoration-amber-300 underline-offset-4 transition group-hover:decoration-amber-500 sm:mt-7">
          Ver productos
          <ArrowIcon />
        </span>
      </button>
    );
  }

  return (
    <article className={cardClassName}>
      {content}
      <a
        href="#contacto"
        className="mt-6 inline-flex text-sm font-semibold text-slate-950 underline decoration-amber-300 underline-offset-4 transition hover:decoration-amber-500 sm:mt-7"
      >
        Consultar
      </a>
    </article>
  );
}

export default function Offer() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const productsTriggerRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="oferta" className="overflow-hidden bg-transparent">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="w-full">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-sm">
              Qué ofrecemos
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Tres formas de convertir tecnología en avance concreto.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:leading-8">
              Podés empezar por una solución lista para usar, una mejora operativa o una
              capacitación. El objetivo siempre es el mismo: claridad, control y resultados.
            </p>
          </div>

          <div className="mt-3 rounded-[1.4rem] border border-slate-200/80 bg-white/60 px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-500 shadow-[0_12px_28px_rgba(15,23,42,0.04)] backdrop-blur sm:mt-7 sm:px-5">
            Cada oferta comparte el mismo criterio: menos ruido, más retorno operativo.
          </div>

          <div className="mt-4 grid gap-4 sm:mt-8 sm:grid-cols-2 lg:mt-9 lg:grid-cols-3">
            {offers.map((offer) => (
              <OfferCard
                key={offer.title}
                {...offer}
                onOpenProducts={() => setIsProductsOpen(true)}
                triggerRef={offer.opensProducts ? productsTriggerRef : undefined}
              />
            ))}
          </div>

          <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-white/[0.78] px-5 py-4 text-sm leading-7 text-slate-600 shadow-[0_12px_28px_rgba(15,23,42,0.05)] backdrop-blur sm:mt-10 sm:px-6">
            Si querés, arrancamos por una consulta por mail y te devolvemos una lectura concreta:
            qué conviene hacer ahora, qué puede esperar y cuál es el siguiente paso con mejor
            retorno.
          </div>
        </div>
      </div>

      <ProductsModal
        isOpen={isProductsOpen}
        onClose={() => setIsProductsOpen(false)}
        returnFocusRef={productsTriggerRef}
      />
    </section>
  );
}
