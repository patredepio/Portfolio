import React from "react";
import Icon from "./icon/Icon"; // Assuming you have a generic Icon component

const LinkedIn = (props) => {
  return (
    <svg
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
      {...props} // Spread the props to allow other customizations (e.g., width, height)
    >
      <g
        id='SVGRepo_bgCarrier'
        strokeWidth='0'
      ></g>
      <g
        id='SVGRepo_tracerCarrier'
        strokeLinecap='round'
        strokeLinejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        <path
          fill='none'
          d='M0 .019h48v48H0v-48z'
        ></path>
        <path
          fill='#ffffff' // Hardcoded white fill for background shape
          d='M34.019 44H13.981C8.478 44 4 39.522 4 34.019V13.981C4 8.478 8.478 4 13.981 4h20.037C39.522 4 44 8.478 44 13.981v20.037C44 39.522 39.522 44 34.019 44zM13.981 8A5.989 5.989 0 0 0 8 13.981v20.037A5.99 5.99 0 0 0 13.981 40h20.037A5.99 5.99 0 0 0 40 34.019V13.981A5.989 5.989 0 0 0 34.019 8H13.981z'
        ></path>
        <circle
          cx='15'
          cy='15'
          r='2'
          fill='#ffffff' // Hardcoded white fill for circle
        ></circle>
        <path
          fill='#ffffff' // Hardcoded white fill for path elements
          d='M13 20h4v15h-4zM35 35h-4v-7.471c0-2.487-.953-3.646-3-3.646l-4 .078V35h-4V20.039l7.961-.156h.001c3.423 0 7.038 2.009 7.038 7.646V35z'
        ></path>
      </g>
    </svg>
  );
};

// Wrap the LinkedIn icon inside a generic Icon component
const WrappedLinkedIn = () => (
  <Icon linkedIn={true}>
    <LinkedIn />
  </Icon>
);

export default React.memo(WrappedLinkedIn);
