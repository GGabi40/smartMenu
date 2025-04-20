import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        // Guardar en localStorage
        const saved = localStorage.getItem("darkMode");
        return saved === "true";
    });

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider