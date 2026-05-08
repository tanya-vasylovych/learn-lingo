"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  ariaLabel?: string;
};

export default function Logo({
  width = 28,
  height = 28,
  className,
  ariaLabel = "LearnLingo",
}: Props) {
  return (
    <Link href="/" aria-label="Home">
      <Image
        src="/logo/ukraine.svg"
        alt={ariaLabel}
        width={width}
        height={height}
        className={className}
        priority
      />
    </Link>
  );
}
