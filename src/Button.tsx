import React from 'react';
import CSS from 'csstype';

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
  // '&:hover': {
  //   top: '1px',
  //   boxShadow: '0 3px #ff0a78',
  // },
  // '&:active': {
  //   top: '5px',
  //   boxShadow: '0 0 #ff0a78',
  // },
};
const blueButtonStyle: CSS.Properties = {
  ...baseButtonStyle,
  background: '#3a86ff',
  boxShadow: '0 5px #4433ff',
  // ':&hover': {
  //   top: '1px',
  //   boxShadow: '0 3px #4433ff',
  // },
  // '&:active': {
  //   top: '5px',
  //   boxShadow: '0 0 #4433ff',
  // },
};

function Button({ children, onClick, color }: ButtonProps) {
  // const { isHover, setIsHover } = useState(false);
  // const { isActive, setIsActive } = useState(false);
  const style = color === 'blue' ? blueButtonStyle : redButtonStyle;
  return (
    <button
      style={style}
      onClick={onClick}
      // className={isHover ? 'hover' : ''}
      // onMouseEnter={setIsHover(true)}
      // onMouseDown={setIsActive(true)}
    >
      {children}{' '}
    </button>
  );
}

export default Button;
