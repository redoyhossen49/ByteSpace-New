"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PiList, PiShoppingBag, PiX } from "react-icons/pi";

import BrandLogo from "@/app/components/brand-logo";
import { authLinks, cartHref, navLinks } from "./data";

export default function Menubar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="w-full bg-brand-purple text-white">
      <nav className="mx-auto flex h-20 w-full max-w-[1600px] items-center justify-between gap-6 px-6 lg:px-10">
        <Link
          href="/"
          className="shrink-0"
          aria-label="ByteSpace home"
          onClick={close}
        >
          <BrandLogo
            tone="light"
            priority
            className="w-[150px] lg:w-[171px]"
          />
        </Link>

        <ul className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={
                    active
                      ? "text-base font-semibold text-white"
                      : "text-base text-white/60 transition-colors hover:text-white"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-7 lg:flex">
          {authLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-white transition-colors hover:text-white/70"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={cartHref}
            aria-label="Cart"
            className="rounded-md p-1 transition-colors hover:bg-white/10"
          >
            <PiShoppingBag size={22} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="menubar-mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 rounded-md p-2 transition-colors hover:bg-white/10 lg:hidden"
        >
          {open ? <PiX size={26} /> : <PiList size={26} />}
        </button>
      </nav>

      <div
        id="menubar-mobile-menu"
        hidden={!open}
        className="border-t border-white/15 bg-brand-purple lg:hidden"
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={close}
                  className={
                    active
                      ? "block rounded-lg bg-white/10 px-4 py-3 text-base font-semibold"
                      : "block rounded-lg px-4 py-3 text-base text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex flex-col gap-3 border-t border-white/15 px-6 py-4">
          {authLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-lg border border-white/25 px-4 py-3 text-center text-base transition-colors hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={cartHref}
            onClick={close}
            className="flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-base font-semibold text-brand-purple transition-opacity hover:opacity-90"
          >
            <PiShoppingBag size={20} />
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}
