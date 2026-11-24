interface BrandWordmarkProps {
  light?: boolean;
  compact?: boolean;
}

const BrandWordmark = ({ light = false, compact = false }: BrandWordmarkProps) => (
  <span
    aria-label="Zyra Digitals"
    className={`inline-block whitespace-nowrap font-sans font-extrabold leading-none tracking-[-0.01em] ${
      compact ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"
    } ${light ? "text-sky-300" : "text-primary"}`}
  >
    Zyra Digitals
  </span>
);

export default BrandWordmark;
