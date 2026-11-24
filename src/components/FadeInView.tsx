import type { ReactNode } from "react";

const FadeInView = ({
  children,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export default FadeInView;
