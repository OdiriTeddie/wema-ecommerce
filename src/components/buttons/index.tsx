import React from "react";
import styles from "./index.module.css";

type ButtonProps = {
//   label?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "default";
  size: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
//   label,
  onClick,
  variant = "default",
  size = "lg",
  disabled = false,
  className,
  children,
  ...rest
}) => {
    
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${styles[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children }
    </button>
  );
};
