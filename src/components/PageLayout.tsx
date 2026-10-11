import Navbar from "./components/Navbar";

export default function PageLayout({ user, children }: { user: any, children: React.ReactNode }) {
    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto] max-md:block w-full">
            <Navbar user={user}></Navbar>
            <div className="px-4 sm:px-6 block lg:px-8 pb-8 w-full">
                {children}
            </div>
        </div>
    );
};
