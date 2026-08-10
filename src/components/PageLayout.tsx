import Navbar from "./components/Navbar";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen grid grid-rows-[auto_1fr_auto] max-md:block w-full">
            <Navbar></Navbar>
            <div className="px-4 sm:px-6 block lg:px-8 pb-8 w-full">
                {children}
            </div>
        </div>
    );
};
