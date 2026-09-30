"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { ReactNode } from "react";
import { PiCaretDown, PiCheck } from "react-icons/pi";

export type DropdownOption = {
  value: string;
  label: string;
};

type FilterDropdownProps = {
  /** Resting label; the chosen option's label replaces it once a non-default
      option is picked. The first option is treated as the default. */
  label: string;
  ariaLabel: string;
  value: string;
  options: DropdownOption[];
  onChange: (value: string) => void;
  icon?: ReactNode;
  variant?: "chip" | "lime";
  align?: "left" | "right";
  className?: string;
};

export default function FilterDropdown({
  label,
  ariaLabel,
  value,
  options,
  onChange,
  icon,
  variant = "chip",
  align = "left",
  className = "",
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isDefault = value === options[0].value;
  const selected = options.find((option) => option.value === value);
  const text = isDefault ? label : (selected?.label ?? label);

  const trigger =
    variant === "lime"
      ? "inline-flex h-14 items-center gap-2 rounded-full bg-brand-lime pl-6 pr-4 text-[15px] font-semibold text-neutral-900 transition-opacity hover:opacity-90"
      : `inline-flex items-center gap-2.5 rounded-full py-4 pl-5 pr-4 text-[15px] transition-colors ${
          isDefault
            ? "bg-brand-chip text-neutral-800 hover:bg-neutral-200"
            : "bg-brand-lime font-semibold text-neutral-900"
        }`;

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        aria-label={ariaLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((current) => !current)}
        className={trigger}
      >
        {icon}
        <span className="whitespace-nowrap">{text}</span>
        <PiCaretDown
          aria-hidden
          size={14}
          className={`shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open ? (
        <ul
          id={menuId}
          role="listbox"
          aria-label={ariaLabel}
          className={`absolute top-[calc(100%+8px)] z-30 max-h-72 w-max min-w-[200px] overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_18px_40px_-18px_rgba(12,4,54,0.35)] ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {options.map((option) => {
            const active = option.value === value;

            return (
              <li key={option.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    onChange(option.value);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-4 rounded-xl px-3 py-2.5 text-left text-[15px] transition-colors hover:bg-brand-chip ${
                    active
                      ? "font-semibold text-neutral-900"
                      : "text-neutral-600"
                  }`}
                >
                  {option.label}
                  {active ? <PiCheck aria-hidden size={15} /> : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
