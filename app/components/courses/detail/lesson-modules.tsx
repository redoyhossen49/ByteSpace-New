import { PiVideoCamera } from "react-icons/pi";

import type { Module } from "@/app/components/courses/data";

type LessonModulesProps = {
  modules: Module[];
};

/* "Lesson List" - each module as a lime tile with the video icon beside its
   title and summary. */
export default function LessonModules({ modules }: LessonModulesProps) {
  return (
    <section className="mt-10">
      <h2 className="text-[17px] font-bold text-neutral-900">Lesson List</h2>

      <ul className="mt-5 flex flex-col gap-5">
        {modules.map((module) => (
          <li key={module.title} className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-lime text-neutral-900">
              <PiVideoCamera aria-hidden size={19} />
            </span>

            <div className="min-w-0">
              <p className="text-[15px] font-bold text-neutral-900">
                {module.title}
              </p>
              <p className="mt-1.5 max-w-[680px] text-[14px] leading-[1.7] text-neutral-500">
                {module.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
