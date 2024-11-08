import React from "react";

const ArrowDown = (props) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor' // This allows dynamic color
      {...props} // Spread props to allow passing dynamic attributes like width, height, etc.
    >
      <g id='SVGRepo_iconCarrier'>
        <g id='Arrow / Arrow_Down_LG'>
          <path
            id='Vector'
            d='M12 21L17 16M12 21L7 16M12 21V3'
            stroke='currentColor' // Stroke color will inherit from parent container's color
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  );
};

export default ArrowDown;
