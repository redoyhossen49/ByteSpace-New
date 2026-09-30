import Link from "next/link";

import BrandLogo from "@/app/components/brand-logo";
import Container from "@/app/components/container";
import NewsletterForm from "./NewsletterForm";

type FooterLink = {
  label: string;
  href: string;
};

const linkGroups: FooterLink[][] = [
  [
    { label: "Featured Courses", href: "/courses" },
    { label: "Featured Categories", href: "/categories" },
    { label: "Business", href: "/categories/business" },
    { label: "IT", href: "/categories/it" },
    { label: "Design", href: "/categories/design" },
  ],
  [
    { label: "Development", href: "/categories/development" },
    { label: "Marketing", href: "/categories/marketing" },
    { label: "Photography", href: "/categories/photography" },
    { label: "Finance", href: "/categories/finance" },
    { label: "Sport", href: "/categories/sport" },
  ],
  [
    { label: "Become a Creator", href: "/creators" },
    { label: "Affiliate Program", href: "/affiliates" },
    { label: "Contact", href: "/contact" },
    { label: "Help", href: "/help" },
    { label: "About", href: "/about" },
  ],
];

const legalLinks: FooterLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-surface pt-14 pb-10 lg:pt-16">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <div>
            <Link
              href="/"
              aria-label="ByteSpace home"
              className="inline-block transition-opacity hover:opacity-80"
            >
              <BrandLogo tone="dark" width={180} height={39} />
            </Link>

            <p className="mt-6 max-w-[470px] text-[14px] leading-relaxed text-neutral-700">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            <NewsletterForm />

            <p className="mt-6 max-w-[520px] text-[12px] leading-relaxed text-neutral-500">
              By subscribing, you agree to our{" "}
              <Link
                href="/privacy"
                className="text-neutral-700 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-9 sm:grid-cols-3 sm:gap-x-8">
            {linkGroups.map((group) => (
              <ul key={group[0].href} className="flex flex-col gap-4">
                {group.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[15px] text-neutral-700 transition-colors hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-24 border-t border-neutral-300 pt-8 lg:mt-32">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[13px] text-neutral-500">
              © {new Date().getFullYear()} ByteSpace. All rights reserved.
            </p>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-neutral-500 transition-colors hover:text-neutral-900"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}
