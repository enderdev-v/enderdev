import Intro from "@/components/HomeSections/Introduction";
import Skill from "@/components/HomeSections/Skills";
import PageLayout from "@/components/PageLayout";

export default function Home() {
    return (
        <PageLayout>
            <Intro></Intro>
            <Skill></Skill>
        </PageLayout>
    );
};