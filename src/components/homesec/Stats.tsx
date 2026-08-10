import { useMobile } from "@src/Hooks/isMobile";
import { useState } from "react";

async function getRepoStats() {
    try {
        const response = await fetch(`https://api.github.com/users/enderdev-v`, {
            headers: {
                'Accept': 'application/vnd.github+json',
                'User-Agent': 'enderdev-page' // GitHub requiere un User-Agent explícito
            }
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}

export default function Stats() {
    const [text, setText] = useState("");
    const [color, setColor] = useState("normal");

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key !== 'Enter') return;
        let output = "";
        let target = (event.target as HTMLInputElement).value;
        target = target.toLowerCase().trim();

        output = ` ${target}`;


        switch (target) {
            case 'stats':
                getRepoStats().then((data) => {
                    setText(output + `\n` + `Usuario: ${data.login}\n Repositorios públicos: ${data.public_repos}\nSeguidores: ${data.followers}\nSiguiendo: ${data.following}`);
                    setColor("normal");
                }).catch(() => {
                    setText(output + `\n` +"Hubo un error intentelo mas tarde")
                    setColor("red");
                });

                break;
            case 'help':
                setText(output + `\n` + "Comandos disponibles: \n- stats \n- help");
                setColor("normal");
                break;
            case 'clear':
                output = "";
                setText("");
                break;
            default:
                setText(output + `\n` + "Comando no reconocido. Escribe 'help' para ver los comandos disponibles.");
                setColor("red");
        }
        return (event.target as HTMLInputElement).value = "";

    };
    const mobile = useMobile();

    if (mobile) {
        return (
            <section className="mb-2">
                <h4 className="font-bold text-3xl dark:text-whiteText text-blackText text-center p-4 pb-12">Github Stats</h4>
                <div className="m-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
                    <img src=" https://github-stats-extended.vercel.app/api?username=enderdev-v&theme=tokyonight&custom_title=enderdev%20Stats" alt="https://git.io/awesome-stats-card" height={512} width={512} />
                    <a href="https://git.io/streak-stats"><img src="https://github-stats-extended.vercel.app/api/top-langs/?username=enderdev-v&theme=tokyonight" alt="GitHub Streak" height={512} width={512} /></a>

                </div>
            </section>
        )
    } else {
        return (
            <section className="my-10" id="About">
                <div className="bg-gray-300/70 dark:bg-introbg-dark/70 h-full w-full py-12 rounded-4xl">

                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-6 m-2 mt-0">
                        <div className="flex-shrink-0">
                            <div className="dark:bg-terminal-dark/65 bg-terminal-light w-xl h-84 rounded-lg font-bold text-lg text-gray-800 dark:text-gray-200 transition-colors duration-750 ease-in-out  ">
                                <p className="dark:text-gray-200 text-gray-700 mx-4 my-2 font-Monocraft">
                                    {
                                        text.length > 0 ?
                                            <p>
                                                <span className="dark:text-cyan-500 text-blue-500 mt-8">~/enderdev {'>>'}</span>
                                                {text.split('\n').map((line, index) => (
                                                    <span key={index}  >
                                                        {index < 1 ? <span> {line} </span> : <span className={color === "red" ? "text-red-500" : ""}> {line} </span>}
                                                        <br />
                                                    </span>
                                                ))}
                                                <br></br>
                                            </p>
                                            : text
                                    }
                                    <span className="dark:text-cyan-500 text-blue-500 mt-8">~/enderdev {'>>'} </span>
                                    <input
                                        type="text"
                                        className="bg-transparent border-none focus:outline-none w-50"
                                        placeholder="Enter command..."
                                        onKeyDown={onKeyDown} />
                                </p>
                            </div>
                        </div>

                        {/* Profile Image and Buttons */}

                        <div className="flex-shrink-0">
                            <div className="p-4 px-20 m-4 border border-white/10 bg-gradient-to-br dark:from-slate-700/40 from-slate-300/40 dark:via-slate-900/80 via-slate-100/80 transition-colors duration-700 ease-in-out shadow-lg dark:shadow-indigo-200 shadow-gray-400 rounded-4xl dark:text-whiteText text-blackText">
                                <h4 className="font-bold text-3xl  text-center">Contact me</h4>
                                <hr className="dark:border-white/25 border-2 rounded-4xl my-4 border-gray-800/25" />
                                <br />
                                <p>
                                    Contact me via email at <a href="mailto:enderdevyt+enderdev@gmail.com" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">enderdevyt@gmail.com</a>

                                    <br />
                                    <br />
                                    Or reach out to me on <a href="https://twitter.com/enderdev_v" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Twitter</a> or <a href="https://github.com/enderdev-v" className="text-blue-400 underline" target="_blank" rel="noopener noreferrer">Github</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        )
    }
};
