type SpeakerProps = {
  initials: string;
  name: string;
  role: string;
  institution: string;
  isPlaceholder?: boolean;
};

export default function SpeakerCard({
  initials,
  name,
  role,
  institution,
  isPlaceholder = false,
}: SpeakerProps) {
  return (
    <div className="bg-white border border-black/8 rounded-[20px] p-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <div
        className={`w-20 h-20 rounded-full mx-auto mb-3.5 flex items-center justify-center font-[var(--font-heading)] text-[22px] font-bold border-2 ${
          isPlaceholder
            ? "bg-cream-muted text-gray-subtle border-cream-muted"
            : "bg-gradient-to-br from-cream-muted to-cream text-navy border-cream-muted"
        }`}
      >
        {initials}
      </div>
      <div
        className={`text-[14px] font-semibold mb-1 ${
          isPlaceholder ? "text-gray-subtle" : "text-gray-text"
        }`}
      >
        {name}
      </div>
      <div
        className={`text-[12px] leading-[1.5] whitespace-pre-line ${
          isPlaceholder ? "text-gray-subtle" : "text-gray-muted"
        }`}
      >
        {role}
      </div>
      <span
        className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-[11px] ${
          isPlaceholder
            ? "bg-cream-muted text-gray-subtle"
            : "bg-result-green/10 text-[#085041]"
        }`}
      >
        {institution}
      </span>
    </div>
  );
}
