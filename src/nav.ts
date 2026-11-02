export type Page =
  | "home"
  | "products"
  | "solutions"
  | "pricing"
  | "about"
  | "demo"
  | "contact"
  | "features";

export const NAV: { label: string; page: Page }[] = [
  { label: "Products", page: "products" },
  { label: "Solutions", page: "solutions" },
  { label: "About Us", page: "about" },
  { label: "Interactive Demo", page: "demo" },
  { label: "Contact", page: "contact" },
];
