import type { ChangeEvent, InputHTMLAttributes } from "react";

type AuthTextFieldProps = {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & Pick<InputHTMLAttributes<HTMLInputElement>, "type" | "autoComplete">;

export default function AuthTextField({
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  autoComplete,
}: AuthTextFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[15px] font-medium text-neutral-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className="mt-2 h-14 w-full rounded-lg border border-neutral-300 bg-white px-4 text-[15px] text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/30"
      />
    </div>
  );
}
