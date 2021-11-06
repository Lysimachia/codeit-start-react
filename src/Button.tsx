import React from 'react';
import './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  className: string;
  onClick: () => void;
};
function Button({ className, children, onClick }: ButtonProps): JSX.Element {
  return (
    <button
      type='button'
      className={`baseButtonStyle ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
