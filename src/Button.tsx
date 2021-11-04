import React, { useState } from 'react';
import CSS from 'csstype';
import './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  color: string;
  onClick: () => void;
};

const baseButtonStyle: CSS.Properties = {
  minWidth: '130px',
  height: '40px',
  color: '#fff',
  padding: '5px 10px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  position: 'relative',
  display: 'inline-block',
  outline: 'none',
  borderRadius: '5px',
  border: 'none',
};
const redButtonStyle: CSS.Properties = {
  ...baseButtonStyle,
  background: '#ff6392',
  boxShadow: '0 5px #ff0a78',
};

const blueButtonStyle: CSS.Properties = {
  ...baseButtonStyle,
  background: '#3a86ff',
  boxShadow: '0 5px #4433ff',
};

function Button({
  children,
  onClick,
  color = 'blue',
}: ButtonProps): JSX.Element {
  const [isHover, setHoverStyle] = useState(false);
  const [isActive, setActiveStyle] = useState(false);
  let style = color === 'blue' ? blueButtonStyle : redButtonStyle;
  if (isHover) {
    if (color === 'blue') {
      style = { ...style, top: '1px', boxShadow: '0 3px #4433ff' };
    } else {
      style = { ...style, top: '1px', boxShadow: '0 3px #ff0a78' };
    }
  }
  if (isActive) {
    style = { ...style };
    if (color === 'blue') {
      style = { ...style, top: '5px', boxShadow: '0 0 #4433ff' };
    } else {
      style = { ...style, top: '5px', boxShadow: '0 0 #ff0a78' };
    }
  }
  return (
    <button
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHoverStyle(true)}
      onMouseDown={() => setActiveStyle(true)}
      onMouseLeave={() => setHoverStyle(false)}
      onMouseUp={() => setActiveStyle(false)}
    >
      {children}{' '}
    </button>
  );
}

export default Button;
