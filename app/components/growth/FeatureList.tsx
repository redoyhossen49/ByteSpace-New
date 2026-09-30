import { PiCheckBold } from "react-icons/pi";

type FeatureListProps = {
  items: string[];
  className?: string;
};

export default function FeatureList({
  items,
  className = "",
}: FeatureListProps) {
  return (
    <ul className={`flex flex-col gap-8 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-3 text-[16px] text-neutral-900 sm:text-[17px]"
        >
          <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-violet">
            <PiCheckBold aria-hidden size={11} className="text-white" />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}
