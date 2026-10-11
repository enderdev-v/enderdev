import { useMobile } from "@src/Hooks/isMobile";
import Skills from "./Skills";
import InfoCard from "../components/InfoCard";

export default function AboutMe() {
    const isMobile = useMobile();

    if (isMobile) {
        return (
            <section className="pt-4 mr-6 ml-8 my-12 mb-40" id="About">
                <h4 className="font-bold text-3xl dark:text-whiteText text-blackText text-center p-4 pb-12">About me!</h4>
                <div className="flex object-center items-center justify-center mx-20 mr-80 max-md:mr-20 ">
                    <div className="max-md:w-72 w-80 bg-white-about-0/75 dark:bg-black-about-0/75 rotate-3 h-80 max-md:mx-0 max-md:h-auto transition-colors duration-700 ease-in-out">
                        <div className="max-md:w-72 max-md:h-auto w-xl bg-white-about-1/90 dark:bg-black-about-1/90 -rotate-6 h-80 flex items-center justify-center z-2 transition-colors duration-700 ease-in-out">
                            <div className="max-md:w-72 max-md:h-auto w-xl bg-white-about-2/50 dark:bg-black-about-2/50 rotate-3 h-72 transition-colors duration-700 ease-in-out">
                                <div className="mb-3 text-blackText dark:text-whiteText max-md:text-sm text-lg mx-8 mt-6 transition-colors duration-700 ease-in-out leading-relaxed">
                                    <div className="font-bold text-lg">Just a simple dev</div>
                                    <div className="mt-3">
                                        <p className="font-normal text-base m-0 my-4">I'm a developer who loves solving problems.</p>
                                        <p className="font-normal text-base m-0 my-4">I code for fun and participate in competitive programming contests.</p>
                                        <p className="font-normal text-base m-0 my-4">I can program in many languages; at the moment I prefer C++.</p>
                                        <p className="font-normal text-base m-0 my-4 max-md:mb-8 mb-0">Anything else?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Skills></Skills>
            </section >
        );
    } else {
        return (
            <section className="my-10" id="About">
                <div className="bg-gray-300/70 dark:bg-introbg-dark/70 h-full w-full py-12 rounded-4xl">

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-6 m-2 mt-0">
                        <div className="flex-shrink-0">

                            <InfoCard>
                                <p className="font-normal text-lg m-0 my-4">I'm a developer who loves solving problems.</p>
                                <p className="font-normal text-lg m-0 my-4">I code for fun and participate in competitive programming contests.</p>
                                <p className="font-normal text-lg m-0 my-4">I can program in many languages; at the moment I prefer C++.</p>
                                <p className="font-normal text-lg m-0 my-4 max-md:mb-8 mb-0">Anything else?</p>
                            </InfoCard>
                        </div>

                        <div className="flex-shrink-0">
                            <h2 className="text-center text-semibold text-xl md:text-4xl  font-extrabold dark:text-whiteText text-blackText">About Me</h2>
                            <hr className="dark:border-white/25 border-2 rounded-4xl my-4 px-24 border-gray-800/25"></hr>
                        </div>

                        {/* Profile Image and Buttons */}

                        <div className="flex-shrink-0">
                            <InfoCard>
                                <h3 className="text-xl font-bold text-blackText dark:text-whiteText text-center">Programming Languages</h3>
                                <hr className="dark:border-white/25 border-2 rounded-4xl my-4 border-gray-800/25" />
                                <img className="" alt="enderdev avatar" src="https://skillicons.dev/icons?i=cpp,python,java,c,ts&perline=6" width="256" height="192" />
                                <h3 className="text-xl font-bold text-blackText dark:text-whiteText mt-3 text-center">Some Projects</h3>
                                <hr className="dark:border-white/25 border-2 rounded-4xl my-4 border-gray-800/25" />
                                <p className="dark:text-whiteText text-blackText">
                                    - enderbot
                                    <br />
                                    - Dev New Tab
                                    <br />
                                    - ChangeTheme (For my linux)
                                    <br />
                                </p>
                            </InfoCard>

                        </div>
                    </div>
                </div>
            </section >
        )
    }
};