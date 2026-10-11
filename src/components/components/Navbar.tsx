import ChangeTheme from "@src/components/ui/ChangeTheme";
import Navlink from "@src/components/ui/NavLink";
import { NavLink as NvLink } from 'react-router'
import { useState } from "react";
import '@css/index.css'
import { useMobile } from "@src/Hooks/isMobile";

export default function Navbar({user}: {user:any}) {
    const [togle, setTogle] = useState(false)
    const mobile = useMobile();
    const clase = togle === false ? `navbar top-0 sticky z-10` : `navbar open top-0 sticky z-10`
    if (mobile) {
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
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 dark:bg-blue-dark bg-blue-light rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-blue-light md:dark:bg-blue-dark  dark:border-gray-700">
                            <Navlink to="/">Home</Navlink>
                            <Navlink to="/social">Social</Navlink>
                            <Navlink to="/projects">Projects</Navlink>
                            <ChangeTheme />
                        </ul>
                    </div>
                </div>
            </nav>


        )
    } else {
        return (
            <nav className="dark:text-whiteText text-blackText w-full sticky top-0">
                <div className="w-full">
                    <div className="flex flex-row items-stretch justify-between w-full">

                        {/* Title de la navbar */}
                        <div className="flex-shrink-0">
                            <div className="dark:bg-blue-dark bg-blue-light h-full py-6 px-6 rounded-br-4xl flex items-center text-whiteText">
                                <span className="font-Monocraft font-extrabold">
                                    ~/{user}{window.location.pathname === "/" ? "" : window.location.pathname} {">>"}
                                </span>
                            </div>
                        </div>

                        {/* Links */}
                        <div className="flex-shrink-0">
                            <div className="dark:bg-blue-dark bg-blue-light h-full py-6 px-6 rounded-bl-4xl flex items-center" id="navbar-default">
                                <ul className="flex flex-row items-center space-x-8 font-Monocraft">
                                    <Navlink to="/">Home</Navlink>
                                    <Navlink to="/social">Social</Navlink>
                                    <Navlink to="/projects">Projects</Navlink>
                                    <ChangeTheme />
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        );
    }
}