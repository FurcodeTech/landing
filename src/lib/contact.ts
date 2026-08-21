export const contactEmail = "contact@furcode.com.ar";
export const jobsEmail = "talent@furcode.com.ar";

export type FurcodeEmail = typeof contactEmail | typeof jobsEmail;

export const buildMailtoUrl = (email: FurcodeEmail) => `mailto:${email}`;
