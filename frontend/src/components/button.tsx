interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export const Button = ({ children, type = "button", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className=" bg-charcoal_grey p-4 rounded-xl w-full text-custom_white font-bold text-sm outline-none hover:ease-in-out duration-700 hover:bg-primary hover:shadow-custom md:text-xs"
    >
      {children}
    </button>
  );
};
