import React from "react";

const SearchIcon = (props) => {
  return (
    <svg
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      stroke='currentColor' // This makes the color dynamic, controlled by the parent container
      {...props} // Spread props to allow passing dynamic attributes like width, height, etc.
    >
      <g id='SVGRepo_iconCarrier'>
        <path
          d='M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z'
          stroke='currentColor' // Stroke color will inherit the color from the parent container
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
    </svg>
  );
};

export default SearchIcon;
