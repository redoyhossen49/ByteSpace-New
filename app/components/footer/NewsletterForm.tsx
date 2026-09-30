"use client";

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
    >
      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email"
        aria-label="Email address"
        className="h-14 w-full rounded-full border border-neutral-300 bg-white px-6 text-[15px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-neutral-500 sm:max-w-[395px]"
      />
      <button
        type="submit"
        className="h-[46px] shrink-0 rounded-full bg-brand-lime px-8 text-[15px] font-medium text-neutral-900 transition-opacity hover:opacity-90"
      >
        Search
      </button>
    </form>
  );
}
