import { WindowLocalStorageNames } from "@/constants/constants";
import { useState, useEffect } from "react";

export default function Changetheme() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem(WindowLocalStorageNames.Theme);
        if (storedTheme) return storedTheme;
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) return "dark";
       
        return "light";
    })

    useEffect(() => {
        if (theme === "dark") {
            document.querySelector("html")?.classList.add("dark");
        } else {
            document.querySelector("html")?.classList.remove("dark");
        }
    }, [theme])
    window.localStorage.setItem(WindowLocalStorageNames.Theme, theme)

    const handleChange = () => {
        setTheme(prevtheme => prevtheme === "dark" ? "light" : "dark")
    }
    return (
        <button onClick={handleChange} className="block y-2 x-3 border-0 font-medium">
            <i className={theme === "light" ? "bx bx-moon text-white-0" : "bx bx-sun text-xl text-white-0"}></i>
        </button>
    );
};
