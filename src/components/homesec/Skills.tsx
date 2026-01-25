import { isMobile } from "@src/Hooks/isMobile";

export default function Skill() {
    const mobile = isMobile();
    const langs = "c,css,git,github,java,js,linux,md,mongodb,nextjs,nodejs,prisma,py,react,ts,vite,tailwind"
    const imgurl = mobile ? `https://skillicons.dev/icons?i=${langs}&perline=6` : `https://skillicons.dev/icons?i=${langs}&perline=10`;
    return (
        <section className="pt-4 mr-6 ml-8 mb-20 pb-0">
            <h2 className="text-center text-semibold text-3xl md:text-4xl p-6 font-extrabold dark:text-whiteText text-blackText">Skills</h2>
                <div className="mt-6 flex justify-center h-30 ">
                    <div className="w-full max-w-2xl p-4">
                        <img height={4096} width={4096} src={imgurl} alt="Skills" />
                    </div>
                </div>
        </section>
    );
};