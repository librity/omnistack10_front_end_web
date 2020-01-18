import React, { useState } from "react";

import Header from "./Header";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <Header title="My title 1" />
      <div>Counter: {counter}</div>
      <buton onClick={handleIncrement}>Increment</buton>
      <Header title="My title 2" />
      <Header title="My title 4" />
    </>
  );
}

export default App;
