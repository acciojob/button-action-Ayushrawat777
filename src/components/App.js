import React, { useState } from "react";

function App() {
  const [isclicked, setClicked] = useState(false);

  // Update paragraph when button is clicked
  const handleClick = () => {
    setClicked(!isclicked);
  };
  // 

  return (
    <div id="main">
      {isclicked && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
      <button id="click" onClick={handleClick}>
        Click
      </button>
    </div>
  );
}

export default App;
