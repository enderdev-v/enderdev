import Bar from "@src/components/ui/Bar";

export default function Skill() {
    return (
        <section className="pt-4 mr-6 ml-8 mb-32 pb-12" id="skills">
            <h2 className="text-center text-semibold text-3xl md:text-4xl p-6 font-extrabold dark:text-whiteText text-blackText">Skills</h2>
                <div className="mt-6 flex justify-center h-30 ">
                    <div className="w-full max-w-2xl p-4">

                        <Bar per={"80%"} title="NodeJS" variant="Dark" />
                        <Bar per={"70%"} title="HTML/CSS" variant="Green" />
                        <Bar per={"70%"} title="React" variant="Indigo" />
                        <Bar per={"40%"} title="Astro" variant="Red" />
                        <Bar per={"80%"} title="Typescript" variant="Blue" />
                        <Bar per={"65%"} title="Java" variant="Yellow" />

                    </div>
                </div>
        </section>
    );
};