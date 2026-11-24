interface AnimatedCounterProps {
  end: number | string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({ end, className = "" }: AnimatedCounterProps) => (
  <span className={className}>{end}</span>
);

export default AnimatedCounter;
