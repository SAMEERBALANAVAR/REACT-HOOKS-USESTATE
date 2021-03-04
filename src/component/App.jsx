import react, { useState } from "react";
import ReactDOM from "react-dom";

var count = 0;

function App() {
  const state = useState();

  function increase() {}

  return (
    <div className="container">
      <h1>0</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}
export default App;
