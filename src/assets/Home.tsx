import Button from "../components/ui/Button"
import "../Styles/home.css";

export default function Home() {
    const link = "https://github.com/enderdev-v"
    link
    return ( 
        <section className="mt-10">
            <div className="flex justify-center items-center p-3 m-4">
                <img className="image" alt="Logo del bot" src="/enderdev.jpg" width="192" height="192"/>
            </div>
            <div className="flex justify-center items-center p-3 m-4">
                <Button variant="outline-info" href={link} target="_blank">Github</Button>
                <Button variant="outline-danger" href="https://www.youtube.com/@enderdev-v/" target="_blank">Youtube</Button>
            </div>
            <div className="flex justify-center text-center mt-3">
               <br />
                <main>
                <h2 className="md:text-4xl text-2xl font-semibold dark:text-white-0 text-black-0">hola soy&nbsp;<span className="text-CtBlue-300">enderdev</span></h2>
                <p className="subtitle">Alguien que le apasiona la tecnologia y aqui esta su web</p>

                </main>
            </div>
        </section>
    )
}

