export type MenubarLink = {
  label: string;
  href: string;
};

export const navLinks: MenubarLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/creators" },
];

export const authLinks: MenubarLink[] = [
  { label: "Sign In", href: "/login" },
  { label: "Join Us", href: "/signup" },
];

export const cartHref = "/cart";
