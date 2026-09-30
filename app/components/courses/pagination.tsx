"use client";

import { PiCaretLeft, PiCaretRight } from "react-icons/pi";

type PaginationProps = {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
};

const arrowButton =
  "flex size-11 shrink-0 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition-colors hover:border-neutral-500 hover:text-neutral-900 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-neutral-300 disabled:hover:text-neutral-700";

export default function Pagination({
  page,
  pageCount,
  onChange,
}: PaginationProps) {
  if (pageCount <= 1) return null;

  return (
    <nav aria-label="Pagination" className="mt-16 flex justify-center">
      <ul className="flex items-center gap-4 sm:gap-5">
        <li>
          <button
            type="button"
            aria-label="Previous page"
            disabled={page === 1}
            onClick={() => onChange(page - 1)}
            className={arrowButton}
          >
            <PiCaretLeft aria-hidden size={16} />
          </button>
        </li>

        {Array.from({ length: pageCount }, (_, index) => index + 1).map(
          (pageNumber) => {
            const current = pageNumber === page;

            return (
              <li key={pageNumber}>
                <button
                  type="button"
                  aria-label={`Page ${pageNumber}`}
                  aria-current={current ? "page" : undefined}
                  onClick={() => onChange(pageNumber)}
                  className={`flex size-9 items-center justify-center rounded-full text-[15px] transition-colors ${
                    current
                      ? "bg-brand-lime font-semibold text-neutral-900"
                      : "text-neutral-600 hover:bg-brand-chip hover:text-neutral-900"
                  }`}
                >
                  {pageNumber}
                </button>
              </li>
            );
          },
        )}

        <li>
          <button
            type="button"
            aria-label="Next page"
            disabled={page === pageCount}
            onClick={() => onChange(page + 1)}
            className={arrowButton}
          >
            <PiCaretRight aria-hidden size={16} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
