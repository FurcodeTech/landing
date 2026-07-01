import { useEffect, useId, useState } from "react";
import {
  buildGmailComposeUrl,
  buildOutlookComposeUrl,
  contactEmail,
  openComposeTab,
} from "../lib/contact";

const contactReasons = [
  "Crear una herramienta interna",
  "Automatizar tareas repetitivas",
  "Capacitar a tu equipo",
];

const firstMessage = [
  "Qué proceso querés mejorar",
  "Qué herramientas usás hoy",
  "Qué resultado esperás lograr",
];

const productOptions = [
  {
    title: "Software a medida",
    description: "Herramientas internas, portales, automatizaciones e integraciones.",
  },
  {
    title: "Implementación IT",
    description: "Diagnóstico, selección de herramientas y puesta en marcha.",
  },
  {
    title: "Academia práctica",
    description: "Capacitación para equipos y profesionales.",
  },
];

type ModalType = "contact" | "jobs" | null;

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold text-slate-800">
      {children}
    </label>
  );
}

export default function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [composeProvider, setComposeProvider] = useState<"gmail" | "outlook">("gmail");
  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(productOptions[0].title);
  const [contactMessage, setContactMessage] = useState("");
  const [applicantName, setApplicantName] = useState("");
  const [cvFileName, setCvFileName] = useState("");
  const [jobMessage, setJobMessage] = useState("");

  const companyId = useId();
  const contactId = useId();
  const contactMessageId = useId();
  const applicantId = useId();
  const cvId = useId();
  const jobMessageId = useId();

  const getComposeUrl = (subject: string, body: string) => {
    return composeProvider === "gmail"
      ? buildGmailComposeUrl(contactEmail, subject, body)
      : buildOutlookComposeUrl(contactEmail, subject, body);
  };

  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    if (!activeModal) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeModal]);

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `${companyName} | ${selectedProduct}`;
    const body = [
      `Nombre: ${contactName}`,
      `Empresa: ${companyName}`,
      `Interes: ${selectedProduct}`,
      "",
      contactMessage,
    ].join("\n");

    openComposeTab(getComposeUrl(subject, body));
    closeModal();
  };

  const handleJobSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      jobMessage,
      "",
      cvFileName
        ? `CV seleccionado: ${cvFileName}. Adjuntalo en el cliente de correo antes de enviar.`
        : "CV pendiente de adjuntar.",
    ].join("\n");

    openComposeTab(getComposeUrl(`Postulacion | ${applicantName}`, body));
    closeModal();
  };

  return (
    <footer id="contacto" className="bg-[#111111] text-white">
      <div className="mx-auto flex max-w-6xl flex-col px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300 sm:text-sm">
              Contacto
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Contanos qué querés ordenar, automatizar o construir.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Te respondemos con una mirada concreta: qué conviene hacer primero,
              qué puede esperar y cómo avanzar sin sumar complejidad innecesaria.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {contactReasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-[1.1rem] border border-white/10 bg-white/[0.03] p-4 text-sm font-medium text-slate-200"
                >
                  <span className="mb-3 block h-2 w-2 rounded-full bg-amber-300" />
                  {reason}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.3rem] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <p className="text-sm font-semibold text-white">Canales directos</p>
              <div className="mt-4 space-y-3 text-sm">
                <a
                  className="block w-full rounded-[1rem] border border-white/10 p-3 text-left font-semibold text-white transition hover:border-amber-300/60 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#111111] sm:p-4"
                  href={buildGmailComposeUrl(
                    contactEmail,
                    "Consulta para Furcode",
                    "Hola Furcode,\n\nQuiero contarles un proceso que quiero ordenar y ver si encaja con lo que hacen.\n\nQuedo atento/a.",
                  )}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {contactEmail}
                  <span className="mt-1 block font-normal text-slate-400">
                    Abrir en Gmail
                  </span>
                </a>
                <button
                  className="block w-full rounded-[1rem] border border-white/10 p-3 text-left font-semibold text-white transition hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#111111] sm:p-4"
                  type="button"
                  onClick={() =>
                    openComposeTab(
                      buildOutlookComposeUrl(
                        contactEmail,
                        "Consulta para Furcode",
                        "Hola Furcode,\n\nQuiero contarles un proceso que quiero ordenar y ver si encaja con lo que hacen.\n\nQuedo atento/a.",
                      ),
                    )
                  }
                >
                  {contactEmail}
                  <span className="mt-1 block font-normal text-slate-400">
                    Abrir en Outlook
                  </span>
                </button>
              </div>
            </div>

            <div className="rounded-[1.3rem] border border-amber-300/25 bg-amber-300/10 p-4 sm:p-5">
              <p className="text-sm font-semibold text-amber-100">Para avanzar más rápido</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {firstMessage.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => setActiveModal("contact")}
              className="inline-flex w-full items-center justify-center rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 focus:ring-offset-[#111111] sm:w-auto"
            >
              Abrir formulario guiado
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between lg:mt-10">
          <p>© {new Date().getFullYear()} Furcode. Todos los derechos reservados.</p>
          <p>Argentina · Software, servicios y academia</p>
        </div>
      </div>

      {activeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 px-4 py-6 backdrop-blur-sm"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="max-h-[min(760px,calc(100dvh-3rem))] w-full max-w-2xl overflow-y-auto rounded-[1.4rem] bg-white p-5 text-slate-950 shadow-2xl sm:p-6"
            data-modal="true"
            role="dialog"
            aria-modal="true"
            aria-labelledby={activeModal === "contact" ? "contact-modal-title" : "jobs-modal-title"}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {activeModal === "contact" ? "Proyectos y consultas" : "Talento"}
                </p>
                <h3
                  id={activeModal === "contact" ? "contact-modal-title" : "jobs-modal-title"}
                  className="mt-1 text-2xl font-semibold tracking-tight"
                >
                  {activeModal === "contact" ? "Armemos el primer mensaje" : "Enviar postulación"}
                </h3>
              </div>
              <button
                className="rounded-full border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-300"
                type="button"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>

            {activeModal === "contact" ? (
              <form className="mt-5 space-y-5" onSubmit={handleContactSubmit}>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-800">Abrir en</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setComposeProvider("gmail")}
                      aria-pressed={composeProvider === "gmail"}
                      className={`rounded-[1rem] border px-4 py-3 text-left transition ${
                        composeProvider === "gmail"
                          ? "border-slate-950 bg-slate-950 text-white"
                          : "border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-400"
                      }`}
                    >
                      <span className="block text-sm font-semibold">Gmail</span>
                      <span
                        className={`mt-1 block text-xs ${
                          composeProvider === "gmail" ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        Nueva pestaña del navegador
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setComposeProvider("outlook")}
                      aria-pressed={composeProvider === "outlook"}
                      className={`rounded-[1rem] border px-4 py-3 text-left transition ${
                        composeProvider === "outlook"
                          ? "border-slate-950 bg-slate-950 text-white"
                          : "border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-400"
                      }`}
                    >
                      <span className="block text-sm font-semibold">Outlook</span>
                      <span
                        className={`mt-1 block text-xs ${
                          composeProvider === "outlook" ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        Nueva pestaña del navegador
                      </span>
                    </button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <FieldLabel htmlFor={companyId}>Nombre de la empresa</FieldLabel>
                    <input
                      id={companyId}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-amber-300"
                      required
                      value={companyName}
                      onChange={(event) => setCompanyName(event.target.value)}
                      autoComplete="organization"
                    />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel htmlFor={contactId}>Tu nombre</FieldLabel>
                    <input
                      id={contactId}
                      className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-amber-300"
                      required
                      value={contactName}
                      onChange={(event) => setContactName(event.target.value)}
                      autoComplete="name"
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className="text-sm font-semibold text-slate-800">
                    Producto por el que nos contactas
                  </legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {productOptions.map((product) => {
                      const isSelected = selectedProduct === product.title;

                      return (
                        <button
                          key={product.title}
                          aria-pressed={isSelected}
                          className={`rounded-lg border p-3 text-left transition ${
                            isSelected
                              ? "border-slate-950 bg-slate-950 text-white"
                              : "border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-400"
                          }`}
                          type="button"
                          onClick={() => setSelectedProduct(product.title)}
                        >
                          <span className="block text-sm font-semibold">{product.title}</span>
                          <span
                            className={`mt-2 block text-xs leading-5 ${
                              isSelected ? "text-slate-300" : "text-slate-500"
                            }`}
                          >
                            {product.description}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="space-y-2">
                  <FieldLabel htmlFor={contactMessageId}>Contexto del proyecto</FieldLabel>
                  <textarea
                    id={contactMessageId}
                    className="min-h-32 w-full resize-y rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-amber-300"
                    required
                    value={contactMessage}
                    onChange={(event) => setContactMessage(event.target.value)}
                  />
                </div>

                <button
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 sm:w-auto"
                  type="submit"
                >
                  {composeProvider === "gmail" ? "Enviar en Gmail" : "Enviar en Outlook"}
                </button>
                <p className="text-xs leading-5 text-slate-500">
                  Al enviar se abrirá una pestaña nueva del navegador con el mensaje listo.
                </p>
              </form>
            ) : (
              <form className="mt-5 space-y-5" onSubmit={handleJobSubmit}>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-slate-800">Abrir en</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setComposeProvider("gmail")}
                      aria-pressed={composeProvider === "gmail"}
                      className={`rounded-[1rem] border px-4 py-3 text-left transition ${
                        composeProvider === "gmail"
                          ? "border-slate-950 bg-slate-950 text-white"
                          : "border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-400"
                      }`}
                    >
                      <span className="block text-sm font-semibold">Gmail</span>
                      <span
                        className={`mt-1 block text-xs ${
                          composeProvider === "gmail" ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        Nueva pestaña del navegador
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setComposeProvider("outlook")}
                      aria-pressed={composeProvider === "outlook"}
                      className={`rounded-[1rem] border px-4 py-3 text-left transition ${
                        composeProvider === "outlook"
                          ? "border-slate-950 bg-slate-950 text-white"
                          : "border-slate-200 bg-slate-50 text-slate-800 hover:border-slate-400"
                      }`}
                    >
                      <span className="block text-sm font-semibold">Outlook</span>
                      <span
                        className={`mt-1 block text-xs ${
                          composeProvider === "outlook" ? "text-slate-300" : "text-slate-500"
                        }`}
                      >
                        Nueva pestaña del navegador
                      </span>
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <FieldLabel htmlFor={applicantId}>Nombre</FieldLabel>
                  <input
                    id={applicantId}
                    className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-amber-300"
                    required
                    value={applicantName}
                    onChange={(event) => setApplicantName(event.target.value)}
                    autoComplete="name"
                  />
                </div>

                <div className="space-y-2">
                  <FieldLabel htmlFor={cvId}>CV</FieldLabel>
                  <label
                    className="flex cursor-pointer flex-col rounded-[1rem] border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600 transition hover:border-slate-500"
                    htmlFor={cvId}
                  >
                    <span className="font-semibold text-slate-900">
                      {cvFileName || "Cargar PDF, Word o imagen"}
                    </span>
                    <span className="mt-1 text-xs">
                      El archivo se selecciona acá, pero debe adjuntarse en el cliente de mail.
                    </span>
                  </label>
                  <input
                    id={cvId}
                    className="sr-only"
                    type="file"
                    accept=".pdf,.doc,.docx,image/*"
                    required
                    onChange={(event) => {
                      setCvFileName(event.target.files?.[0]?.name ?? "");
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <FieldLabel htmlFor={jobMessageId}>Presentacion</FieldLabel>
                  <textarea
                    id={jobMessageId}
                    className="min-h-32 w-full resize-y rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-amber-300"
                    required
                    value={jobMessage}
                    onChange={(event) => setJobMessage(event.target.value)}
                  />
                </div>

                <button
                  className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-offset-2 sm:w-auto"
                  type="submit"
                >
                  {composeProvider === "gmail" ? "Enviar en Gmail" : "Enviar en Outlook"}
                </button>
                <p className="text-xs leading-5 text-slate-500">
                  Al enviar se abrirá una pestaña nueva del navegador. Adjuntá el CV antes de confirmar el envío.
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
