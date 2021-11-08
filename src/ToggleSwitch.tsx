import React from 'react';
import './ToggleSwitch.css';

function ToggleSwitch({ onClick }: { onClick: any }) {
  return (
    <label htmlFor='toggleSwitch' className='switch'>
      <input type='checkbox' id='toggleSwitch' onClick={onClick} />
      <span className='slider round' />
    </label>
  );
}

export default ToggleSwitch;
