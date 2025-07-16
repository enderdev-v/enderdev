export default function About() {
    return (

        <section className="pt-4   mr-6 ml-8 my-12 " id="About">
            <h4 className="font-bold text-3xl dark:text-white-200 text-gray-800 text-center p-4 pb-12">About me!</h4>
            <div className="flex items-center object-center justify-center">
                <div className="md:h-64 h-72 w-80 md:w-100  rounded-2xl shadow-lg dark:bg-gray-900/50 dark:shadow-gray-700 shadow-gray-900 bg-neutral-800/50 rotate-2 z-1">
                    <div className="md:h-64 h-72 w-80 md:w-100 rounded-xl dark:bg-gray-800/50 bg-zinc-600/50 relative -rotate-3 dark:shadow-gray-600 shadow-gray-800">
                        <div className="md:h-32 h-24 w-80 md:w-100 rotate-2 md:p-12 p-8">
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-200 sm:text-lg">
                                <span className="font-bold">Just a simple dev</span>
                                <br /><br />
                                I develop somethings that I like, I like developing with React, NodeJS, and Typescript. 
                                <br />
                                Also I make Discord Bots with Seyfert and DJS (I don't use it much). 
                                <br />
                                Anything else?
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};
