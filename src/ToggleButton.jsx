import { useContext } from "react";
import { ThemeContext } from "./ThemeContextProvider";

export default function ToggleContext() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);
    
  return (
    <>
        <button onClick={() => setDarkTheme(prev => !prev)}>Toggle Theme</button>
        <div className={darkTheme ? 'darkTheme' : 'light'}>Box</div>
    </>
  )
}
