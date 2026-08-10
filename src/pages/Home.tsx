import AboutMe from "@src/components/homesec/Aboutme";
import Intro from "@src/components/homesec/Introduction";
import Stats from "@src/components/homesec/Stats";
import PageLayout from "@src/components/PageLayout";

export default function Home() {
    return (
        <PageLayout>
            <Intro></Intro>
            <AboutMe></AboutMe>
            <Stats></Stats>
        </PageLayout>
    );
};