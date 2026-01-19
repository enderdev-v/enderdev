import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 ">
                {children}
            </div>
            <Footer></Footer>
        </>
    );
};
