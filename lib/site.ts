/** Single source of truth for business facts. Edit here, every page updates. */

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://tandemlearner.com").replace(
  /\/$/,
  "",
);

export const BUSINESS_NAME = "Tandem Learner";
export const ADDRESS_LINE = "40, Wijayaba Mawatha, Kalubowila";
export const ADDRESS = {
  street: "40, Wijayaba Mawatha",
  area: "Kalubowila",
  city: "Colombo",
  country: "LK",
};
export const WEEKLY_CAPACITY = 20;
export const NEARBY_AREAS = ["Dehiwala", "Mount Lavinia", "Nugegoda", "Ratmalana", "Wellawatte"];

/* ---- Contact ---- */
export const EMAIL = "totandemlearner@gmail.com";
/* Phone and WhatsApp can be overridden in Vercel; these are the defaults. */
export const PHONE_DISPLAY = process.env.NEXT_PUBLIC_PHONE || "+94 77 564 5076";
const waDigits = (process.env.NEXT_PUBLIC_WHATSAPP || "94775645076").replace(/\D/g, ""); // e.g. 94771234567
export const PHONE_HREF = PHONE_DISPLAY ? `tel:${PHONE_DISPLAY.replace(/[^\d+]/g, "")}` : "";
export const WHATSAPP_HREF = waDigits
  ? `https://wa.me/${waDigits}?text=${encodeURIComponent(
      "Hi, I would like to book a free trial class at Tandem Learner.",
    )}`
  : "";

/* ---- Calendly: one link per trial type. Falls back to the single link you already have. ---- */
const calendlyFallback = process.env.NEXT_PUBLIC_CALENDLY_URL || "";
export const CALENDLY = {
  online: process.env.NEXT_PUBLIC_CALENDLY_ONLINE_URL || calendlyFallback,
  inPerson: process.env.NEXT_PUBLIC_CALENDLY_INPERSON_URL || calendlyFallback,
};

/* ---- Maps ---- */
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS_LINE)}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS_LINE)}&output=embed`;

/* ---- Prices: per student, per session, LKR ---- */
export const PRICES = [
  { grades: "Grade 10 and 11", online: 2000, inPerson: 2500 },
  { grades: "Grade 12 and 13", online: 3000, inPerson: 3500 },
] as const;
export const SESSION_LENGTH = { online: "1.5 hours", inPerson: "2 hours" } as const;
export const lkr = (n: number) => `LKR ${n.toLocaleString("en-US")}`;
export const PRICE_RANGE = `${lkr(PRICES[0].online)} - ${lkr(PRICES[1].inPerson)}`;

export const SUBJECTS = [
  "Mathematics",
  "ICT",
  "Computer Science",
  "Physics",
  "Chemistry",
  "Biology",
] as const;

/* Pages that exist today. Add new pages here when they go live and the menus update. */
export const SITE_PAGES = [
  { href: "/edexcel-tuition-colombo", label: "Edexcel (London)" },
  { href: "/cambridge-tuition-colombo", label: "Cambridge" },
  { href: "/fees", label: "Fees" },
  { href: "/resources", label: "Study guides" },
] as const;
