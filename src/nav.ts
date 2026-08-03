export type Page =
  | "home"
  | "solutions"
  | "pricing"
  | "about"
  | "demo"
  | "contact"
  | "features";

export const NAV: { label: string; page: Page }[] = [
  { label: "Solutions", page: "solutions" },
  { label: "Pricing", page: "pricing" },
  { label: "About Us", page: "about" },
  { label: "Interactive Demo", page: "demo" },
  { label: "Contact", page: "contact" },
];
