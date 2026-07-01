import { useContext, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeDisplay = () => {
    const [theme, setTheme] = useState('dark');
    const altTheme = useContext(ThemeContext);
    return (
        <>
            <h1>The theme is {theme}</h1>
            <div>
                <button onClick={() => {
                    if (theme === 'dark') {
                        setTheme(altTheme);
                    } else {
                        setTheme('dark');
                    }
                }}>Click to change theme</button>
            </div>
        </>
    );
}

export default ThemeDisplay;