import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-app">
      <h1 className="count"> {count}</h1>
      <div className="button-container">
        <button className="increment-button" onClick={increment}>
          Increment
        </button>
        <button className="decrement-button" onClick={decrement}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
