import Bar from "../components/Bar";


export default function Skill() {
    return (
        <section className="pt-4 mr-6 ml-8 mb-20" id="skills">
            <h2 className="text-center text-semibold text-3xl md:text-4xl p-6 font-extrabold dark:text-white-0">Skills</h2>
                <div className="mt-6 flex justify-center h-30 ">
                    <div className="w-full max-w-2xl p-4">

                        <Bar per={"70%"} title="NodeJS" variant="Dark" />
                        <Bar per={"60%"} title="HTML/CSS" variant="Blue" />
                        <Bar per={"80%"} title="React" variant="Dark" />
                        <Bar per={"10%"} title="Astro" variant="Yellow" />
                        <Bar per={"90%"} title="Typescript" variant="Dark" />
                        <Bar per={"80%"} title="Java" variant="Dark" />

                    </div>
                </div>
        </section>
    );
};
