import { useState, useEffect } from "react"; 

export default function Changetheme() {
    const [theme, setTheme] = useState(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return "dark";
        }
        return "light";
    })
    
    useEffect(() => {
        if (theme === "dark") { 
            document.querySelector("html")?.classList.add("dark");
        } else {
            document.querySelector("html")?.classList.remove("dark");
        }
    }, [theme])
    
    const handleChange = () => {
        setTheme(prevtheme => prevtheme === "dark" ? "light" : "dark")
    }
    return (
        <button onClick={handleChange} className="block y-2 x-3 border-0 font-medium">
        <i className={theme === "light" ? "bx bx-moon" : "bx bx-sun text-xl text-white-0"}></i>
        </button>
    );
};
