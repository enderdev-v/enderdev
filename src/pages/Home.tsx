import About from "@components/Sections/About";
import Footer from "@components/Sections/Footer";
import Intro from "@components/Sections/Intro";
import Navbar from "@components/Sections/navbar";
import Skills from "@components/Sections/Skills";
import '../index.css'

export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <Intro />
            <About />
            <Skills />
            <Footer />
        </>
    );
};
