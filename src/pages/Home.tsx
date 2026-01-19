import AboutMe from "@src/components/homesec/Aboutme";
import Intro from "@src/components/homesec/Introduction";
import Skill from "@src/components/homesec/Skills";
import PageLayout from "@src/components/PageLayout";

export default function Home() {
    return (
        <PageLayout>
            <Intro></Intro>
            <section className="pt-4 mr-6 ml-8 my-12 mb-20" id="About">
                <h4 className="font-bold text-3xl dark:text-whiteText text-blackText text-center p-4 pb-12">About me!</h4>
                <AboutMe></AboutMe>
            </section>
            <Skill></Skill>
            <section className="mb-2">
                <h4 className="font-bold text-3xl dark:text-whiteText text-blackText text-center p-4 pb-12">Github Stats</h4>
                <div className="m-10 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8">
                    <img src="https://awesome-github-stats.azurewebsites.net/user-stats/enderdev-v?cardType=github&theme=tokyonight&preferLogin=true" alt="https://git.io/awesome-stats-card" height={512} width={512} />
                    <a href="https://git.io/streak-stats"><img src="https://github-readme-streak-stats-vijaypur.vercel.app?user=enderdev-v&theme=tokyonight&hide_border=true&short_numbers=true&date_format=j%20M%5B%20Y%5D" alt="GitHub Streak" height={512} width={512} /></a>

                </div>
            </section>
        </PageLayout>
    );
};