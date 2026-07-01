export const contactEmail = "marcosfurco22@gmail.com";

const normalizeBody = (body: string) => body.replace(/\n/g, "\r\n");

const buildQuery = (subject: string, body: string) =>
  `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(normalizeBody(body))}`;

export const buildGmailComposeUrl = (email: string, subject: string, body: string) => {
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&${buildQuery(subject, body)}`;
};

export const buildOutlookComposeUrl = (email: string, subject: string, body: string) => {
  return `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}&${buildQuery(subject, body)}`;
};

export const openComposeTab = (url: string) => {
  const popup = window.open(url, "_blank", "noopener,noreferrer");

  if (popup) {
    popup.opener = null;
    popup.focus();
    return true;
  }

  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  return false;
};
