export default function AboutMe() {
    return (
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
    );
};