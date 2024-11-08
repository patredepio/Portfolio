import React from "react";

const Coding = (props) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor' // Use currentColor to inherit color
      {...props} // Spread props to allow passing dynamic attributes like width, height, etc.
    >
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M15.5 15L18.5 12L15.5 9M8.5 9L5.5 12L8.5 15M13 7L11 17M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z'
          stroke='currentColor' // This will inherit the parent container's color
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default Coding;
