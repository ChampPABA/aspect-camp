type BadgeColor = "teal" | "gold" | "red" | "purple" | "navy";

const colorClasses: Record<BadgeColor, string> = {
  teal: "bg-result-green/10 text-result-green border-result-green/20",
  gold: "bg-gradient-to-r from-gold-from/10 to-gold-to/10 text-[#8B6914] border-gold/30",
  red: "bg-risk-red/10 text-risk-red border-risk-red/20",
  purple: "bg-[#7F77DD]/20 text-[#AFA9EC] border-[#7F77DD]/30",
  navy: "bg-navy/10 text-navy border-navy/20",
};

export default function Badge({
  children,
  color = "navy",
  className = "",
}: {
  children: React.ReactNode;
  color?: BadgeColor;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${colorClasses[color]} ${className}`}
    >
      {children}
    </span>
  );
}
