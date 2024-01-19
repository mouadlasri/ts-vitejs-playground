import React, { useState } from "react";

// import CSS
import "./Movingdot.css";

export const Movingdot = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // get surrounding box dimensions
    const box = e.currentTarget.getBoundingClientRect();
    // box.left is the distance from the left edge of the viewport to the left edge of the box
    const x = e.clientX - box.left;
    // box.top is the distance from the top edge of the viewport to the top edge of the box
    const y = e.clientY - box.top;

    setPosition({
      x: x,
      y: y,
    });
  };

  return (
    <>
      <div className="movingdot-container" onMouseMove={handleMouseMove}>
        {/* moving dot */}
        <div
          className="movingdot"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ></div>
      </div>
    </>
  );
};
