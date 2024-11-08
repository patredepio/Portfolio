import React, {
  Fragment,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import "./Content.css";
import Container from "../Container/Container";
import Website1 from "../Websites/Website1/Website1";
import Website2 from "../Websites/Website2/Website2";
import Website3 from "../Websites/Website3/Website3";
import Loading from "../Loading/Loading";

// Predefined positions for different screen widths
const postions = [
  ["translate(-10%, 15%)", "translate(-12%, 15%)", "translate(-20%, 15%)"],
  ["translate(0%, 10%)", "translate(0%, 10%)", "translate(0%, 10%)"],
  ["translate(10%, 5%)", "translate(12%, 5%)", "translate(20%, 5%)"],
];

const Content = () => {
  const [loading, setLoading] = useState(true);
  const [ctns, setCtns] = useState([
    { type: 1, "z-index": 1, position: 0, website: Website3 },
    { type: 2, "z-index": 1, position: 1, website: Website2 },
    { type: 3, "z-index": 1, position: 2, website: Website1 },
  ]);
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowsWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoize the click handler to avoid unnecessary function creation on every render
  const handleClick = useCallback(
    (index) => {
      setCtns((prevState) => {
        const newState = [...prevState];
        const clickedCtn = newState[index];
        const clickedPosition = clickedCtn.position;

        if (clickedPosition === 2) {
          return prevState; // No updates needed
        }

        return newState.map((ctn, i) => {
          if (i === index) {
            return { ...ctn, position: 2, "z-index": 3 };
          }

          const newPosition = ctn.position + 1;
          if (newPosition >= 2) {
            if (ctn.position === 2) {
              return { ...ctn, position: 0, "z-index": 1 };
            }
            return { ...ctn, position: 1, "z-index": 2 };
          }
          return { ...ctn, position: newPosition, "z-index": 2 };
        });
      });
    },
    [] // Only recreate this function if the dependencies change
  );

  // Memoize the style object for each container
  const containerStyles = useMemo(() => {
    return ctns.map((ctn) => ({
      zIndex: ctn["z-index"],
      transform:
        windowsWidth < 640
          ? postions[ctn.position][0]
          : windowsWidth >= 640 && windowsWidth < 1120
          ? postions[ctn.position][1]
          : postions[ctn.position][2],
    }));
  }, [ctns, windowsWidth]);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <div className='content'>
          {ctns.map((ctn, index) => (
            <Container
              key={ctn.type}
              clicked={() => handleClick(index)}
              type={ctn.type}
              style={containerStyles[index]}
            >
              {React.createElement(ctn.website)}
            </Container>
          ))}
        </div>
      )}
    </Fragment>
  );
};

export default React.memo(Content);
