import AboutMe from "@src/components/HomeSections/Aboutme";
import Intro from "@src/components/HomeSections/Introduction";
import Skill from "@src/components/HomeSections/Skills";
import PageLayout from "@src/components/PageLayout";

export default function Home() {
    return (
        <PageLayout>
            <Intro></Intro>
            <section className="pt-4 mr-6 ml-8 my-12 mb-20" id="About">
                <h4 className="font-bold text-3xl dark:text-whiteText text-gray-800 text-center p-4 pb-12">About me!</h4>
                <AboutMe></AboutMe>
            </section>
            <Skill></Skill>
        </PageLayout>
    );
};