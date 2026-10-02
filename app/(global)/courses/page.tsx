import type { Metadata } from "next";
import { Suspense } from "react";

import CourseBrowser from "@/app/components/courses/course-browser";
import GridBackdrop from "@/app/components/grid-backdrop";

export const metadata: Metadata = {
  title: "Courses | ByteSpace",
  description:
    "Search and filter the ByteSpace catalog of design, development, marketing and photography courses.",
};

function CourseBrowserFallback() {
  return (
    <section
      aria-hidden
      className="relative isolate overflow-hidden bg-brand-purple py-14 lg:py-20"
    >
      <GridBackdrop className="-z-10" offsetY="-5rem" />
    </section>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<CourseBrowserFallback />}>
      <CourseBrowser />
    </Suspense>
  );
}
