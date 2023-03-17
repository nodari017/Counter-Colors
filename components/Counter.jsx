import { useState } from "react";

export default function Counter () {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prev) => prev + 1);
  };
  const decrease = () => {
    setCount((prev) => prev - 1);
  };

  const changecolor = () => {
    if (count < 0) {
      return 'blue';
    } 
    else if (count < 15) {
      return 'green';
    }
    else if (count < 30) {
      return 'yellow';
    }
    else {
      return "red"
    }
  };

  return (
    <div className="container">
      <div className={`cardWrapper ${changecolor()}`}>
        <div className="temperature">{count} °C</div>
        <div className="control-container">
          <button className="controller plus" onClick={increase}>+</button>
          <button className="controller minus" onClick={decrease}>-</button>
        </div>
      </div>
    </div>
  );
}

