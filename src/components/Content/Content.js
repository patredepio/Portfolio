import React, { Fragment, useEffect, useState } from "react";
import "./Content.css";
import Container from "../Container/Container";
import Website1 from "../Websites/Website1/Website1";
import Website2 from "../Websites/Website2/Website2";
import Website3 from "../Websites/Website3/Website3";

const postions = [
  ["translate(-10%, 15%)", "translate(-12%, 15%)", "translate(-20%, 15%)"],
  ["translate(0%, 10%)", "translate(0%, 10%)", "translate(0%, 10%)"],
  ["translate(10%, 5%)", "translate(12%, 5%)", "translate(20%, 5%)"],
];
const Content = () => {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

  const { innerWidth } = window;
  useEffect(() => {
    setWindowsWidth(innerWidth);
  }, [innerWidth]);
  const [ctns, setCtns] = useState([
    {
      type: 1,
      "z-index": 1,
      position: 0,
      website: Website3,
    },
    {
      type: 2,
      "z-index": 1,
      position: 1,
      website: Website2,
    },
    {
      type: 3,
      "z-index": 1,
      position: 2,
      website: Website1,
    },
  ]);
  console.log();
  return (
    <Fragment>
      <div className='content'>
        {ctns.map((ctn, index) => (
          <Container
            clicked={() =>
              setCtns((prevState) => {
                const state = [...prevState]; // Create a shallow copy of the previous state

                const clickedCtn = state[index];
                const clickedPosition = clickedCtn.position;

                // If the clicked item is already in position 2, return the state without changes
                if (clickedPosition === 2) {
                  return prevState; // No updates needed
                }

                // Update the clicked item and other items in one pass
                const newState = state.map((ctn, i) => {
                  if (i === index) {
                    // Set the clicked item to position 2 and z-index 3
                    return { ...ctn, position: 2, "z-index": 3 };
                  }

                  // Calculate the new position for other items
                  const newPosition = ctn.position + 1;

                  // Logic for updating positions and z-index based on the newPosition
                  if (newPosition >= 2) {
                    if (ctn.position === 2) {
                      // If current position is 2, reset to position 0 and z-index 1
                      return { ...ctn, position: 0, "z-index": 1 };
                    } else {
                      // If current position is 1 or 0, move to position 1 and z-index 2
                      return { ...ctn, position: 1, "z-index": 2 };
                    }
                  } else {
                    // Default: increase position by 1 and set z-index to 2
                    return { ...ctn, position: newPosition, "z-index": 2 };
                  }
                });

                return newState;
              })
            }
            key={ctn.type}
            type={ctn.type}
            style={{
              zIndex: ctn["z-index"],
              transform:
                windowsWidth < 640
                  ? postions[ctn.position][0]
                  : windowsWidth >= 640 && windowsWidth < 1120
                  ? postions[ctn.position][1]
                  : postions[ctn.position][2],
            }}
          >
            {React.createElement(ctn.website)}
          </Container>
        ))}
      </div>
      <div></div>
    </Fragment>
  );
};
export default Content;
