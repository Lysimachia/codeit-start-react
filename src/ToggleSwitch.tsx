import React from 'react';
import './ToggleSwitch.css';

function ToggleSwitch() {
  return (
    <label htmlFor='toggleSwitch' className='switch'>
      <input type='checkbox' id='toggleSwitch' />
      <span className='slider round' />
    </label>
  );
}

export default ToggleSwitch;
