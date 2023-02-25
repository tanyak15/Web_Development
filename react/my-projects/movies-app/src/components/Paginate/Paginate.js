import React, { useRef, useEffect } from "react";

// as props --> onIntersection={(isOnEnd) => setIsNearEnd(isOnEnd)}
const Paginate = (props) => {
  const observingDivRef = useRef();

  useEffect(() => {
    const observingElement = observingDivRef.current;

    if (!observingElement) return;

    const observer = new IntersectionObserver((data) => {
      const isIntersecting = data[0].isIntersecting;

      if (props.onIntersection) props.onIntersection(isIntersecting);
    });

    observer.observe(observingElement);
    return () => {
      observer.unobserve(observingElement);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {props.children}
      <div
        ref={observingDivRef}
        style={{
          position: "absolute",
          bottom: "0",
          height: `${window.innerHeight * 1}px`,
        }}
      ></div>
    </div>
  );
};

export default Paginate;
