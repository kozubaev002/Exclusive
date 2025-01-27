import React from 'react';
import './Button.scss';

const Button = ({ text }) => {
  return (
    <button className="custom-button">
      <p style={{color:"white"}}>Save Changes</p>
    </button>
  );
};

export default Button;