import React from 'react';

const CustomButton = ({title, handleClick}) => {
  return (
    <input
        className="currency-button" 
        type="button"
        value={title}
        onClick={handleClick} />
  )
}

export default CustomButton;