import Changetheme from "@components/ChangeTheme";
import Navlink from "@components/navlink";
import '@/index.css'
import { useState } from "react";
export default function Navbar() {
    const [togle, setTogle] = useState(false)
    const clase = togle === false ? `navbar top-0 sticky z-10` : `navbar open top-0 sticky z-10`
    return (
        <nav className={clase}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white-0">enderdev</span>
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="menu" onClick={() => setTogle(!togle)}>
					<span className={togle === false ? "bx bx-menu text-4xl" : "bx bx-x text-4xl"}></span>
					<span className="sr-only">Open main menu</span>
					<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
				</button>
                <div className="links" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 dark:bg-Ctblue-100 bg-Ctblue-300 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-Ctblue-300 md:dark:bg-CtBlue-100 dark:border-gray-700">
                        <Navlink Link="/">Home</Navlink>
                        <Navlink Link="/#skills">Skills</Navlink>
                        <Navlink Link="/projects">Projects</Navlink>
                        <Changetheme />
                    </ul>
                </div>
            </div>
        </nav>


    )
}