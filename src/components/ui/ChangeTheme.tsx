import { WindowLocalStorageNames } from "#src/constants/constants";
import { useEffect, useState } from "react";


export default function ChangeTheme() {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem(WindowLocalStorageNames.Theme);
        if (storedTheme) return storedTheme;
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return "dark";
        }
        return "light";
    })

    useEffect(() => {
        if (theme === "dark") {
            return document.querySelector("html")?.setAttribute("data-theme", theme);
        } else {
            return document.querySelector("html")?.removeAttribute("data-theme");
        }
    }, [theme])
    window.localStorage.setItem(WindowLocalStorageNames.Theme, theme)
    const handleChange = (e: any) => {
        e.stopPropagation();
        setTheme(prevtheme => prevtheme === "dark" ? "light" : "dark")
    }
    return (
        <button className="cursor-pointer" onClick={handleChange}>
            <i className={theme === "dark" ? 'bx bx-moon max-md:text-sm max-md:font-bold text-xl text-whiteText' : "bx bx-sun max-md:text-sm max-md:font-bold text-xl text-whiteText"} ></i>
        </button>

    );
};