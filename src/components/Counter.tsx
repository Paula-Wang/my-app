import React, { useState } from "react";

type CounterProps = {
    initialCount: number;
};

const Counter = ({initialCount}: CounterProps) => {
    const [counter, setCounter] = useState<number>(initialCount);

    const delayedCount = () =>
    setTimeout(() => setCounter((counter) => counter + 1), 2000);

    const buttons = [
        {label: "-1", value: -1},
        {label: "+1", value: 1},
        {label: "-50", value: -50},
        {label: "+50", value: 50},
        {label: "-100", value: -100},
        {label: "+100", value: 100},
    ];

    const handleCountUpdate = (value: number) => {
        setCounter(counter + value);
    };

    return (
        <div className="center">
            <h1>Counter {counter}</h1>
            {buttons.map((button, index) => (
        <button key={index} onClick={() => handleCountUpdate(button.value)}>
          {button.label}
        </button>
      ))}
      <button onClick={delayedCount}>Delayed + 1</button>
    </div>
  );
};

export default Counter;

// use.map() function to dynamically create setCount buttons -1, +1, -50, +50, -100, +100

//rafce + TAB