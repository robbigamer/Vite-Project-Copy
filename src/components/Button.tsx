import React, { forwardRef } from "react";

// 1. Extend native HTML button attributes so all standard props are supported
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", children, ...props }, ref) => {
    // 2. Define standard base styles and variant styles using Tailwind classes
    const baseStyles =
      "px-4 py-2 font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantStyles = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      secondary:
        "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
      danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    };

    // 3. Combine classes safely
    const combinedClasses =
      `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

    return (
      <button
        ref={ref}
        className={combinedClasses}
        {...props} // 4. Spreads standard attributes (onClick, disabled, type, etc.)
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
