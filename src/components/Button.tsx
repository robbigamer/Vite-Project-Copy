// src/components/Button.tsx
import React, { forwardRef } from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  color?: string;
  variant?: "primary" | "secondary" | "danger";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className = "", text, color = "bg-blue-600", children, ...props },
    ref,
  ) => {
    const combinedClasses =
      `px-4 py-2 text-white rounded-md font-medium ${color} hover:opacity-90 transition-opacity ${className}`.trim();

    return (
      <button ref={ref} className={combinedClasses} {...props}>
        {text || children}
      </button>
    );
  },
);

Button.displayName = "Button";
export default Button;
