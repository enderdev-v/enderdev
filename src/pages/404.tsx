import PageLayout from "@/components/PageLayout";
import { NavLink } from "react-router";

export default function Page404() {
    return (
        <PageLayout>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-6xl font-bold mb-4 dark:text-whiteText text-blackText">404</h1>
                <img className="rounded-lg border-2 border-solid border-sky-600" src="https://cdn.discordapp.com/emojis/1324117835756081235.webp?size=96&animated=true" alt="Ryo Laugh" height={128} width={128}/>
                <p className="text-2xl mb-8 dark:text-whiteText text-blackText">Oops! The page you're looking for doesn't exist.</p>
                <NavLink to="/" className="text-enderBlue hover:underline dark:text-enderBlue">Go back to Home</NavLink>
            </div>
        </PageLayout>
    );
};