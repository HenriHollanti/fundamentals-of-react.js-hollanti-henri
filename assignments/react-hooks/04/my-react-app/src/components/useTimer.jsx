import { useState, useEffect } from "react";

function UseTimer() {
    const [time, setTime] = useState(Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(Date());
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);
    return (
        <div>
            <h2>{time}</h2>
        </div>
    )
}

export default UseTimer;