import React, { useState } from "react";
import { Color } from "../App";

interface SquaresProps {
  colors: {
    name: string;
    hex: string;
  }[];
  setSelectedColor: React.Dispatch<
    React.SetStateAction<
      | {
          name: string;
          hex: string;
        }
      | undefined
    >
  >;
}

const Squares: React.FC<SquaresProps> = ({ colors, setSelectedColor }) => {
  const handleClick = (color: Color): void => {
    setSelectedColor(color);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color.hex}
            style={{
              backgroundColor: color.hex,
              width: "100px",
              height: "100px",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleClick(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default Squares;
