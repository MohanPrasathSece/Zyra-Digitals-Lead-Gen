import logoImg from "@/assets/logo.png";

interface BrandWordmarkProps {
  light?: boolean;
  compact?: boolean;
  className?: string;
}

const BrandWordmark = ({ light = false, compact = false, className = "" }: BrandWordmarkProps) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <img
      src={logoImg}
      alt="Zyra Digitals"
      className={`${compact ? "h-8 sm:h-9" : "h-9 sm:h-10"} w-auto object-contain ${
        light ? "brightness-0 invert drop-shadow-sm" : ""
      }`}
    />
  </div>
);

export default BrandWordmark;
