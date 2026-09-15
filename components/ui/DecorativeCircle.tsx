interface DecorativeCircleProps {
  variant?: "solid" | "ring" | "outline" | "gold";
  size?: number;
  ringWidth?: number;
  className?: string;
}

const variantStyles: Record<string, string> = {
  solid: "bg-pine-ring",
  ring: "border-pine-ring",
  outline: "border border-white/20",
  gold: "bg-gold",
};

export default function DecorativeCircle({
  variant = "solid",
  size = 200,
  ringWidth = 56,
  className = "",
}: DecorativeCircleProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none box-border rounded-full ${variantStyles[variant]} ${className}`}
      style={{
        width: size,
        height: size,
        ...(variant === "ring"
          ? { borderWidth: ringWidth, borderStyle: "solid" }
          : null),
      }}
    />
  );
}
