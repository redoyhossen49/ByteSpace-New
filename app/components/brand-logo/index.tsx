import Image from "next/image";

type BrandLogoProps = {
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

/* Same artwork in two colourways: logo-full.png paints the wordmark in
   near-white for dark surfaces, footer-logo.png paints it in near-black for
   light ones. The lime mark is identical in both. */
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
      className={`h-auto ${className}`}
    />
  );
}
