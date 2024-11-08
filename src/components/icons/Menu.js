import React from "react";

const Menu = (props) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor' // This makes the color dynamic, controlled by the parent container
      {...props} // Spread props to allow passing dynamic attributes like width, height, etc.
    >
      <g id='SVGRepo_iconCarrier'>
        <g id='Menu / Menu_Alt_03'>
          <path
            id='Vector'
            d='M5 17H13M5 12H19M5 7H13'
            stroke='currentColor' // Stroke color will inherit the color from the parent container
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
      </g>
    </svg>
  );
};

export default React.memo(Menu);
