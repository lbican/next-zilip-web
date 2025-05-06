import { ButtonHTMLAttributes, ReactNode } from "react";

export enum ButtonVariant {
  PRIMARY,
  SECONDARY,
}

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  variant = ButtonVariant.PRIMARY,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses = "rounded-md px-5 py-2.5 text-sm font-medium transition ";
  const variants = {
    [ButtonVariant.PRIMARY]: "bg-teal-600 text-white hover:bg-teal-700",
    [ButtonVariant.SECONDARY]:
      "bg-gray-100 text-teal-600 hover:text-teal-600/75",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${props.className}`}
      {...props}
    >
      {children}
    </button>
  );
};
