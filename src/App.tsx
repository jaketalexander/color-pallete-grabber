import React, { useState } from "react";
import "./App.css";

interface Color {
  name: string;
  hex: string;
}

const colors: Color[] = [
  { name: "Red", hex: "#ff0000" },
  { name: "Green", hex: "#00ff00" },
  { name: "Blue", hex: "#0000ff" },
  { name: "Yellow", hex: "#ffff00" },
  { name: "Pink", hex: "#ffc0cb" },
  { name: "Purple", hex: "#800080" },
];

const App: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<Color | undefined>(
    undefined
  );

  const handleClick = (color: Color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1>Color Palette</h1>
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
      {selectedColor && (
        <div>
          <h2>Selected Color</h2>
          <p>Name: {selectedColor.name}</p>
          <p>Hex: {selectedColor.hex}</p>
        </div>
      )}
    </div>
  );
};

export default App;
