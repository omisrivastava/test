import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="counterContainer">
      <h2 className="heading">
        Omi's Counter App
      </h2>
      <div className="countValue">Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(-count)}>Change Sign</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;
