import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

/* The single source of the site's horizontal rhythm: a 1600px column with 24px
   gutters, widening to 40px from lg. The menubar and every section render
   through this so their content lines up edge to edge instead of each section
   picking its own max-width. */
export default function Container({
  as: Tag = "div",
  className = "",
  children,
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-[1600px] px-6 lg:px-10 ${className}`}>
      {children}
    </Tag>
  );
}
