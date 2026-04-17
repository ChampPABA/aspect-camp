export default function Eyebrow({
  children,
  variant = "dark",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "dark" | "light" | "gold";
  className?: string;
}) {
  const colorClass =
    variant === "light"
      ? "text-gold"
      : variant === "gold"
        ? "text-gold"
        : "text-navy";

  return (
    <span
      className={`text-[11px] font-medium uppercase tracking-[0.12em] ${colorClass} ${className}`}
    >
      {children}
    </span>
  );
}
