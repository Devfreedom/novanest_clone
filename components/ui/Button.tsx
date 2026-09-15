import type { ReactNode } from "react";

type ButtonVariant = "primary" | "outline";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
}

const baseStyles =
  "inline-flex items-center justify-center rounded-btn px-6 py-3 text-sm font-medium leading-none transition-colors";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-btn-fill text-pine-deep hover:bg-btn-hover-fill",
  outline:
    "border border-btn-stroke/70 bg-transparent text-btn-stroke hover:border-btn-hover-stroke hover:text-mint-cream",
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
