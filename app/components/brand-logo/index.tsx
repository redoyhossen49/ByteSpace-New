import Image from "next/image";
import type { CSSProperties } from "react";

type BrandLogoProps = {
  tone?: "light" | "dark";
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
};

const src = "/logo-full.png";

/* logo-full.png paints the wordmark in near-white, so it only reads on dark
   surfaces. For light surfaces the same bitmap is reused as a mask: the lime
   mark keeps its colour and only the wordmark is recoloured. The two layers
   split at 19% of the width, which is the empty gutter between the mark
   (0-17%) and the wordmark (22-100%). */
const markClip = "inset(0 81% 0 0)";
const wordClip = "inset(0 0 0 19%)";

function maskStyles(): CSSProperties {
  return {
    WebkitMaskImage: `url(${src})`,
    WebkitMaskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    WebkitMaskPosition: "left center",
    maskImage: `url(${src})`,
    maskSize: "contain",
    maskRepeat: "no-repeat",
    maskPosition: "left center",
  };
}

export default function BrandLogo({
  tone = "light",
  className = "",
  priority = false,
  width = 171,
  height = 37,
}: BrandLogoProps) {
  if (tone === "light") {
    return (
      <Image
        src={src}
        alt="ByteSpace"
        width={width}
        height={height}
        priority={priority}
        className={`h-auto ${className}`}
      />
    );
  }

  return (
    <span
      role="img"
      aria-label="ByteSpace"
      style={{ aspectRatio: `${width} / ${height}` }}
      className={`relative block ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-brand-lime"
        style={{
          ...maskStyles(),
          clipPath: markClip,
          WebkitClipPath: markClip,
        }}
      />
      <span
        aria-hidden
        className="absolute inset-0 bg-neutral-900"
        style={{
          ...maskStyles(),
          clipPath: wordClip,
          WebkitClipPath: wordClip,
        }}
      />
    </span>
  );
}
