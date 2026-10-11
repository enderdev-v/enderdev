import Button from "@src/components/ui/Button";
import { useMobile } from "@src/Hooks/isMobile";

export default function Intro() {
    const mobile = useMobile();

    if (mobile) {
        return (
            <section className="mt-10">

                <div className="flex justify-center items-center p-3 m-4">
                    <img className="rounded-full border-2 border-solid border-indigo-600" alt="enderdev avatar" src="/enderdev.png" width="192" height="192" />
                </div>
                <div className="flex justify-center items-center p-3 m-4">
                    <Button variant="outline-secondary" href="https://github.com/enderdev-v" target="_blank">Github</Button>
                    <Button variant="outline-info" href="https://twitter.com/enderdev_v" target="_blank">Twitter</Button>
                </div>
                <div className="flex justify-center text-center mt-2">
                    <main>
                        <h2 className="md:text-4xl text-2xl font-semibold dark:text-whiteText text-blackText transition-colors duration-750 ease-in-out">Hi guys I'm&nbsp;<span className="dark:text-banana text-DarkOcean transition-colors duration-750 ease-in-out">enderdev!</span></h2>
                        <p className="w-72 ml-4 mr-4 pt-3 dark:text-whiteText text-blackText font-semibold text-xl text-balance text-center transition-colors duration-750 ease-in-out">A simple dev who can do interesting things, Nice to meet you!</p>
                    </main>
                </div>
            </section>
        )
    } else {
        // 
        return (
            <section className="mt-10 bg-[url('/frieren.jpeg')] bg-fixed bg-cover rounded-4xl p-4 mb-24">
                <div className="bg-introbg-light/85 dark:bg-introbg-dark/85 h-full w-full py-12 rounded-4xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-8 m-4">
                        {/* Terminal */}

                        <div className="flex-shrink-0">
                            <div className="dark:bg-terminal-dark/65 bg-terminal-light w-xl h-84 rounded-lg font-bold text-lg text-gray-800 dark:text-gray-200 transition-colors duration-750 ease-in-out  ">
                                <p className="dark:text-gray-200 text-gray-700 mx-4"> <span className="dark:text-cyan-500 text-blue-500 mt-8 font-Monocraft">~/enderdev {'>>'}</span> Introduction.bin ▯</p>
                                <pre className="dark:text-gray-200 text-gray-800 font-bold mx-4 my-2 font-Monocraft">
                                    <br />
                                    {'   |             Hi everyone!'}<br />
                                    {' .\'|\'.'}<br />
                                    {'/.\'|\\  \\          I\'m enderdev!'}<br />
                                    {'| /|\'.|          A simple dev'}<br />
                                    {' \\ |\\/           who can do'}<br />
                                    {'  \\|/            interesting things'}<br />
                                    {'   `             Nice to meet you!'}
                                </pre>
                            </div>
                            <a className="text-blue-400 text-[0.50rem] underline" href="https://wall.alphacoders.com/big.php?i=1355194" target="_blank" rel="noopener noreferrer">Background src</a>
                        </div>

                        {/* Profile Image and Buttons */}

                        <div className="flex-shrink-0">
                            <p className="text-2xl dark:text-whiteText text-blackText">Do you need more about me?</p>
                            <br />
                            <Button variant="outline-secondary" href="https://github.com/enderdev-v" target="_blank">Github</Button>
                            <Button variant="outline-info" href="https://twitter.com/enderdev_v" target="_blank">Twitter</Button>
                        </div>
                        <div className="flex-shrink-0">
                            <img className="rounded-4xl border-2 border-solid border-indigo-600" alt="enderdev avatar" src="/enderdev.png" width="256" height="192" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}