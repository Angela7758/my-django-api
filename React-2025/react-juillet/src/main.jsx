import React, { useState } from "react";
import { createRoot } from "react-dom/client";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div>
      <p>The color is {color}</p>
      <button onClick={() => setColor("blue")}>Blue</button>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
