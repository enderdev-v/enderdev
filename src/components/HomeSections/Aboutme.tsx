export default function AboutMe() {
    return (
        <div className="flex object-center items-center justify-center mx-20 mr-80 max-md:mr-20 transition-colors duration-750 ease-in-out">
            <div className="max-md:w-52 w-80 dark:bg-gray-900/75 bg-gray-300/75  rotate-3 h-80 z-1 max-md:mx-0 max-md:h-auto transition-colors duration-750 ease-in-out">
                <div className="max-md:w-52 max-md:h-auto w-xl dark:bg-gray-800/90 bg-gray-200/90 -rotate-6 h-80 flex items-center justify-center z-2 transition-colors duration-750 ease-in-out" >
                    <div className="max-md:w-52 max-md:h-auto  w-xl dark:bg-gray-900/50 bg-gray-100/50 rotate-3 h-80 z- transition-colors duration-750 ease-in-out">
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-200 max-md:text-sm text-lg mx-4 mt-6 max-md:mx-2 transition-colors duration-750 ease-in-out">
                            <span className="font-bold">Just a simple dev</span>
                            <br /><br />
                            <p>I try new things for example i learning C and Java for do interesting projects.</p>
                            <br />
                            Also I make Discord Bots with Seyfert and DJS (I don't use it much).
                            <br />
                            Anything else?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};