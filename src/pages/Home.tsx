import AboutMe from "@src/components/homesec/Aboutme";
import Intro from "@src/components/homesec/Introduction";
import Stats from "@src/components/homesec/Stats";
import PageLayout from "@src/components/PageLayout";

export default function Home({ user, setUser}: {user: any, setUser: any}) {
    return (
        <PageLayout user={user}>
            <Intro></Intro>
            <AboutMe></AboutMe>
            <Stats user={user} setUser={setUser}></Stats>
        </PageLayout>
    );
};