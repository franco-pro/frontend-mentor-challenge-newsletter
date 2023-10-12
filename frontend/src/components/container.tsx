import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: Props) => {
  return <div className={clsx(" max-w-7xl m-auto", className)}>{children}</div>;
};
