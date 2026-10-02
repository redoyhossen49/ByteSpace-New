import Image from "next/image";

type BrandLogoProps = {
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

const sources = {
  light: "/logo-full.png",
  dark: "/footer-logo.png",
} as const;

export default function BrandLogo({
  tone = "light",
  className = "",
  priority = false,
  width = 171,
  height = 37,
}: BrandLogoProps) {
  return (
    <Image
      src={sources[tone]}
      alt="ByteSpace"
      width={width}
      height={height}
      priority={priority}
      className={`block h-auto ${className}`}
    />
  );
}