import React, { useState } from "react";
import "./App.css";
import Squares from "./components/squares";

export interface Color {
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

  return (
    <div>
      <h1>Color Palette</h1>
      <Squares colors={colors} setSelectedColor={setSelectedColor} />
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
