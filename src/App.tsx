import About from "./assets/About";
import Footer from "./assets/Footer";
import Home from "./assets/Home";
import Navbar from "./assets/navbar";
import Skills from "./assets/Skills";
import './index.css'

export default function App() {
  return (
    <>
    <Navbar></Navbar>
    <Home />
    <About />
    <Skills />
    <Footer />
    </>
  )
}