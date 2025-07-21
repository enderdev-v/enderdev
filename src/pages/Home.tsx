import About from "../assets/About";
import Footer from "../assets/Footer";
import Intro from "../assets/Intro";
import Navbar from "../assets/navbar";
import Skills from "../assets/Skills";
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
