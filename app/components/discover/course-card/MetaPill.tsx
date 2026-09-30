import type { ReactNode } from "react";

type MetaPillProps = {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export default function MetaPill({
  children,
  icon,
  className = "",
}: MetaPillProps) {
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-white/90 px-3 py-1.5 text-[12px] font-medium text-neutral-600 backdrop-blur-sm ${className}`}
    >
      {icon}
      {children}
    </span>
  );
}
