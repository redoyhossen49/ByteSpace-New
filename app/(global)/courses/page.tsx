import type { Metadata } from "next";
import { Suspense } from "react";

import CourseBrowser from "@/app/components/courses/course-browser";

export const metadata: Metadata = {
  title: "Courses | ByteSpace",
  description:
    "Search and filter the ByteSpace catalog of design, development, marketing and photography courses.",
};

function CourseBrowserFallback() {
  return <section aria-hidden className="bg-brand-purple py-14 lg:py-20" />;
}

export default function CoursesPage() {
  return (
    <Suspense fallback={<CourseBrowserFallback />}>
      <CourseBrowser />
    </Suspense>
  );
}
