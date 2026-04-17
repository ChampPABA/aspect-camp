type ProofProps = {
  text: string;
  avatar: string;
  name: string;
  detail: string;
};

export default function ProofCard({ text, avatar, name, detail }: ProofProps) {
  return (
    <div className="bg-white border border-black/8 rounded-[20px] p-6 relative">
      <span className="absolute top-3 left-[18px] text-[48px] font-[var(--font-heading)] text-cream-muted leading-none">
        &ldquo;
      </span>
      <p className="text-[14px] text-gray-muted leading-[1.7] pt-6">{text}</p>
      <div className="mt-4 flex items-center gap-2.5 border-t border-black/8 pt-3.5">
        <div className="w-9 h-9 rounded-full bg-cream-muted flex items-center justify-center text-[12px] font-semibold text-navy shrink-0">
          {avatar}
        </div>
        <div>
          <div className="text-[13px] font-semibold text-gray-text">{name}</div>
          <div className="text-[12px] text-gray-muted">{detail}</div>
        </div>
      </div>
    </div>
  );
}
