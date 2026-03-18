import { type ComponentPropsWithoutRef } from "react";

type Variant = "gold" | "outline-white" | "teal" | "outline-navy";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  gold: "bg-gradient-to-r from-gold-from to-gold-to text-navy shadow-gold hover:shadow-gold-hover hover:-translate-y-0.5",
  "outline-white":
    "bg-transparent text-white border border-white/50 hover:bg-white/8 hover:border-white",
  teal: "bg-navy text-cream hover:bg-navy-hover hover:-translate-y-0.5 shadow-sm hover:shadow-md",
  "outline-navy":
    "bg-transparent text-navy border-[1.5px] border-navy hover:bg-navy/5",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[13px]",
  md: "px-7 py-3.5 text-[15px]",
  lg: "px-9 py-4 text-[17px]",
};

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: Variant;
  size?: Size;
};

export default function Button({
  variant = "gold",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={`inline-flex items-center gap-2 rounded-full font-medium whitespace-nowrap cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </a>
  );
}
