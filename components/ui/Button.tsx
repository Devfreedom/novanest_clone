import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-[10px] px-6 py-3 text-sm font-medium leading-none transition-colors";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-sage text-pine-deep hover:bg-cream",
  outline:
    "border border-sage/70 bg-transparent text-sage hover:border-sage hover:text-cream",
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <a href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </a>
  );
}
