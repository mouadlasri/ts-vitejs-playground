import React, { useState } from "react";

import "./movingdot.css";

export const Movingdot = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const boundingBox = e.currentTarget.getBoundingClientRect();
    const x: number = e.clientX - boundingBox.left - 10;
    const y: number = e.clientY - boundingBox.top - 10;

    setPosition({
      x: x,
      y: y,
    });
  };

  return (
    <div>
      <h1>Moving Test Dot</h1>
      <div className="moving-dot-container" onMouseMove={handleMouseMove}>
        <div
          className="moving-dot"
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      </div>
    </div>
  );
};
