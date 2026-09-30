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
  { label: "Sign In", href: "/signin" },
  { label: "Join Us", href: "/join" },
];

export const cartHref = "/cart";
