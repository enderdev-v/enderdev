import PageLayout from "@src/components/PageLayout";
import { NavLink } from "react-router";

export default function Page404({ user }: { user: any }) {
    return (
        <PageLayout user={user}>
            <div className="flex flex-col items-center justify-center h-96 max-md:h-auto">
                <h1 className="text-5xl max-md:text-3xl font-semibold mb-6 dark:text-whiteText text-blackText mt-12">All right, Error 404</h1>
                <img className="rounded-full border-2 border-solid border-sky-600 my-7" src="https://cdn.discordapp.com/emojis/1324117835756081235.webp?size=96&animated=true" alt="Ryo Laugh" height={160} width={160}/>
                <p className="text-2xl max-md:text-xl mx-4 mb-0 dark:text-whiteText text-blackText">Oops! The page you're looking for doesn't exist.</p>
                <NavLink to="/" className="text-blue-dark hover:underline dark:text-blue-dark mt-6">Go back to Home</NavLink>
            </div>
        </PageLayout>
    );
};