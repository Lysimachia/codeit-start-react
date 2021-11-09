import React, { TouchEventHandler } from 'react';
import './ToggleSwitch.css';

function ToggleSwitch({
  onClick,
  onTouchStart,
}: {
  onClick: React.MouseEventHandler<HTMLInputElement>;
  onTouchStart: TouchEventHandler<HTMLInputElement>;
}) {
  return (
    <label htmlFor='toggleSwitch' className='switch'>
      <input
        type='checkbox'
        id='toggleSwitch'
        onClick={onClick}
        onTouchStart={onTouchStart}
      />
      <span className='slider round' />
    </label>
  );
}

export default ToggleSwitch;
