import { useState, useEffect } from "react";

function UseTimer() {
    const [time, setTime] = useState(Date());
    
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);
    return <h1>{time}</h1>;
}

export default UseTimer;