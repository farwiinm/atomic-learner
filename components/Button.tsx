import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "inverse" | "teal";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-navy text-white hover:shadow-lg hover:shadow-navy/20 hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-navy border border-line hover:border-navy",
  inverse:
    "bg-white text-navy hover:-translate-y-0.5 hover:shadow-lg",
  teal: "bg-teal text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal/20",
};

export function Button({
  children,
  href,
  variant = "primary",
  onClick,
  type = "button",
  className = "",
  full = false,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  full?: boolean;
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-semibold transition-all duration-150 ${
    variantClasses[variant]
  } ${full ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
