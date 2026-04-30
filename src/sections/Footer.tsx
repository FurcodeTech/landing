import { useEffect, useId, useState } from "react";

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

const buildMailto = (email: string, subject: string, body: string) => {
  const params = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${email}?${params.toString()}`;
};

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: string }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold text-slate-800">
      {children}
    </label>
  );
}

export default function Footer() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
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

  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    if (!activeModal) {
      delete document.body.dataset.modalOpen;
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.dataset.modalOpen = "true";
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      delete document.body.dataset.modalOpen;
      document.body.style.overflow = previousOverflow;
    };
  }, [activeModal]);

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `${companyName} || ${contactName} || ${selectedProduct}`;
    window.location.href = buildMailto("marcosfurco22@gmail.com", subject, contactMessage);
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

    window.location.href = buildMailto(
      "marcosfurco22@gmail.com",
      `Postulación || ${applicantName}`,
      body,
    );
    closeModal();
  };

  return (
    <footer id="contacto" className="snap-section bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col px-4 py-10 sm:px-6 sm:py-12 lg:min-h-dvh lg:justify-center lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase text-lime-300 sm:text-sm">
              Contacto
            </p>
            <h2 className="mt-3 max-w-2xl text-2xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
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
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-4 text-sm font-medium text-slate-200"
                >
                  <span className="mb-3 block h-2 w-2 rounded-full bg-lime-300" />
                  {reason}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-4 sm:p-5">
              <p className="text-sm font-semibold text-white">Canales directos</p>
              <div className="mt-4 space-y-3 text-sm">
                <button
                  className="block w-full rounded-lg border border-white/10 p-3 text-left font-semibold text-white transition hover:border-lime-300/60 sm:p-4"
                  type="button"
                  onClick={() => setActiveModal("contact")}
                >
                  marcosfurco22@gmail.com
                  <span className="mt-1 block font-normal text-slate-400">
                    Proyectos y consultas
                  </span>
                </button>
                <button
                  className="block w-full rounded-lg border border-white/10 p-3 text-left font-semibold text-white transition hover:border-lime-300/60 sm:p-4"
                  type="button"
                  onClick={() => setActiveModal("jobs")}
                >
                  marcosfurco22@gmail.com
                  <span className="mt-1 block font-normal text-slate-400">
                    Talento y colaboraciones
                  </span>
                </button>
              </div>
            </div>

            <div className="rounded-lg border border-lime-300/30 bg-lime-300/10 p-4 sm:p-5">
              <p className="text-sm font-semibold text-lime-100">
                Para avanzar más rápido
              </p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                {firstMessage.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
          data-snap-ignore="true"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              closeModal();
            }
          }}
        >
          <div
            className="max-h-[min(760px,calc(100dvh-3rem))] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-5 text-slate-950 shadow-2xl sm:p-6"
            data-modal="true"
            role="dialog"
            aria-modal="true"
            aria-labelledby={activeModal === "contact" ? "contact-modal-title" : "jobs-modal-title"}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 pb-4">
              <div>
                <p className="text-xs font-semibold uppercase text-slate-500">
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
                className="rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
                type="button"
                onClick={closeModal}
              >
                Cerrar
              </button>
            </div>

            {activeModal === "contact" ? (
              <form className="mt-5 space-y-5" onSubmit={handleContactSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <FieldLabel htmlFor={companyId}>Nombre de la empresa</FieldLabel>
                    <input
                      id={companyId}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-lime-300"
                      required
                      value={companyName}
                      onChange={(event) => setCompanyName(event.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <FieldLabel htmlFor={contactId}>Forma de contacto (mail/telefono)</FieldLabel>
                    <input
                      id={contactId}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-lime-300"
                      required
                      value={contactName}
                      onChange={(event) => setContactName(event.target.value)}
                    />
                  </div>
                </div>

                <fieldset>
                  <legend className="text-sm font-semibold text-slate-800">
                    Producto por el que nos contactás
                  </legend>
                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    {productOptions.map((product) => {
                      const isSelected = selectedProduct === product.title;

                      return (
                        <button
                          key={product.title}
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
                    className="min-h-32 w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-lime-300"
                    required
                    value={contactMessage}
                    onChange={(event) => setContactMessage(event.target.value)}
                  />
                </div>

                <button
                  className="inline-flex w-full items-center justify-center rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 sm:w-auto"
                  type="submit"
                >
                  Enviar mail
                </button>
              </form>
            ) : (
              <form className="mt-5 space-y-5" onSubmit={handleJobSubmit}>
                <div className="space-y-2">
                  <FieldLabel htmlFor={applicantId}>Nombre</FieldLabel>
                  <input
                    id={applicantId}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-lime-300"
                    required
                    value={applicantName}
                    onChange={(event) => setApplicantName(event.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <FieldLabel htmlFor={cvId}>CV</FieldLabel>
                  <label
                    className="flex cursor-pointer flex-col rounded-lg border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600 transition hover:border-slate-500"
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
                  <FieldLabel htmlFor={jobMessageId}>Presentación</FieldLabel>
                  <textarea
                    id={jobMessageId}
                    className="min-h-32 w-full resize-y rounded-md border border-slate-300 px-3 py-2 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-lime-300"
                    required
                    value={jobMessage}
                    onChange={(event) => setJobMessage(event.target.value)}
                  />
                </div>

                <button
                  className="inline-flex w-full items-center justify-center rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-lime-300 focus:ring-offset-2 sm:w-auto"
                  type="submit"
                >
                  Enviar postulación
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
