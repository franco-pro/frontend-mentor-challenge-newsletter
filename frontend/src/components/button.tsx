import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: any;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  type = "button",
  onClick,
  disabled,
  className,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        " bg-charcoal_grey p-4 rounded-xl w-full text-custom_white font-bold text-sm outline-none hover:ease-in-out duration-700 hover:bg-primary hover:shadow-custom md:text-xs xl:text-xl",
        className
      )}
    >
      {children}
    </button>
  );
};
