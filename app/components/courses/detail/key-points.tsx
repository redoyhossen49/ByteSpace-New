import { PiCheckCircleFill } from "react-icons/pi";

type KeyPointsProps = {
  points: string[];
};

export default function KeyPoints({ points }: KeyPointsProps) {
  return (
    <section className="mt-12">
      <h2 className="text-[19px] font-bold text-neutral-900">Key Points</h2>

      <ul className="mt-5 flex flex-col gap-4">
        {points.map((point) => (
          <li key={point} className="flex items-start gap-3">
            <PiCheckCircleFill
              aria-hidden
              size={18}
              className="mt-0.5 shrink-0 text-brand-purple"
            />
            <span className="text-[15px] text-neutral-800">{point}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
