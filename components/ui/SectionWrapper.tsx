type BgVariant = "cream" | "white" | "gray" | "navy" | "navy-deep";

const bgClasses: Record<BgVariant, string> = {
  cream: "bg-cream text-gray-text",
  white: "bg-white text-gray-text",
  gray: "bg-cream-muted text-gray-text",
  navy: "bg-navy text-cream",
  "navy-deep": "bg-navy-deep text-cream",
};

export default function SectionWrapper({
  children,
  bg = "cream",
  id,
  className = "",
  hasGlow = false,
}: {
  children: React.ReactNode;
  bg?: BgVariant;
  id?: string;
  className?: string;
  hasGlow?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative py-20 px-[5%] overflow-hidden ${bgClasses[bg]} ${className}`}
    >
      {hasGlow && bg === "navy" && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 80% 50%, rgba(212,185,120,0.08) 0%, transparent 70%)",
          }}
        />
      )}
      <div className="relative z-10 mx-auto max-w-[1100px]">{children}</div>
    </section>
  );
}
