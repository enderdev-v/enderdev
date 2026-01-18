import ChangeTheme from "@components/UI/ChangeTheme";
import Navlink from "@components/UI/NavLink";
import { NavLink as NvLink } from 'react-router'
import { useState } from "react";
import '@/css/index.css'

export default function Navbar() {
    const [togle, setTogle] = useState(false)
    const clase = togle === false ? `navbar top-0 sticky z-10` : `navbar open top-0 sticky z-10`
    return (
        <nav className={clase}>
            <div className="max-w-full flex flex-wrap items-center justify-between mx-10 mr-8 p-4 ">
                <NvLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-whiteText">enderdev</span>
                </NvLink>
                <button data-collapse-toggle="navbar-default" type="button" className="menu" onClick={() => setTogle(!togle)}>
					<span className={togle === false ? "bx bx-menu text-4xl" : "bx bx-x text-4xl"}></span>
				</button>
                <div className="links" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 dark:bg-enderBlue bg-enderBlue rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-enderBlue md:dark:bg-enderBlue dark:border-gray-700">
                        <Navlink to="/">Home</Navlink>
                        <Navlink to="/#skills">Skills</Navlink>
                        <Navlink to="/social">Social</Navlink>
                        <Navlink to="/projects">Projects</Navlink>
                        <ChangeTheme />
                    </ul>
                </div>
            </div>
        </nav>


    )
}