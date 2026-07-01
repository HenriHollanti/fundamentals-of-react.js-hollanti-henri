import { useState, useEffect } from "react";

const TitleUpdater = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCounter(initVal => initVal + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.title = counter;
  }, [counter]);
  return <h1>{counter}</h1>
};

export default TitleUpdater;