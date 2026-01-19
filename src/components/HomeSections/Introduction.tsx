import Button from "#components/UI/Button";
import "#css/HomeSections.css";

export default function Intro() {
    return ( 
        <section className="mt-10">
            <div className="flex justify-center items-center p-3 m-4">
                <img className="image" alt="enderdev avatar" src="/enderdev.jpg" width="192" height="192"/>
            </div>
            <div className="flex justify-center items-center p-3 m-4">
                <Button variant="outline-info" href="https://github.com/enderdev-v" target="_blank">Github</Button>
                <Button variant="outline-danger" href="https://www.youtube.com/@enderdev-v/" target="_blank">Youtube</Button>
            </div>
            <div className="flex justify-center text-center mt-2">
                <main>
                <h2 className="md:text-4xl text-2xl font-semibold dark:text-whiteText text-blackText transition-colors duration-750 ease-in-out">Hi guys I'm&nbsp;<span className="dark:text-[#fffdbe] text-blue-600">enderdev!</span></h2>
                <p className="w-72 ml-2 mr-4 pt-3 dark:text-whiteText text-blackText font-semibold text-xl text-wrap text-center transition-colors duration-750 ease-in-out">A random dev that make interesting things</p>
                </main>
            </div>
        </section>
    )
}