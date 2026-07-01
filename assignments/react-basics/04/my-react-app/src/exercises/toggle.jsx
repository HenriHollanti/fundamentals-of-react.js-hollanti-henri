import { useState } from "react";

const ToggleButton = () => {
    const [isToggled, setToggle] = useState("ON");
  // declare state with useState
  // toggle between "ON" and "OFF"
  return <button onClick={() => {
    if (isToggled === "ON") {
        setToggle("OFF");
    } else {
        setToggle("ON");
    }
  }}>{isToggled}</button>
};

export default ToggleButton;