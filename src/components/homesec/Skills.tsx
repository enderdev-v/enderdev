
export default function Skill() {
    return (
        <section className="pt-4 mr-6 ml-8 mb-20 pb-0">
            <h2 className="text-center text-semibold text-3xl md:text-4xl p-6 font-extrabold dark:text-whiteText text-blackText">Skills</h2>
                <div className="mt-6 flex justify-center h-30 ">
                    <div className="w-full max-w-2xl p-4">

                        <img height={4096} width={4096} src="https://skillicons.dev/icons?i=c,css,git,github,java,js,linux,md,mongodb,nextjs,nodejs,prisma,py,react,ts,vite,tailwind&perline=10" alt="Skills" />

                    </div>
                </div>
        </section>
    );
};