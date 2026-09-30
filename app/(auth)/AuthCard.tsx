import type { ReactNode } from "react";

type AuthCardProps = {
  className?: string;
  children: ReactNode;
};

export default function AuthCard({ className = "", children }: AuthCardProps) {
  return (
    <div
      className={`w-full rounded-2xl bg-white p-8 text-neutral-900 lg:p-12 ${className}`}
    >
      {children}
    </div>
  );
}
