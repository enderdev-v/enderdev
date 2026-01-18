import Home from "./Pages/Home"
import { Routes, Route } from "react-router";
import "./css/index.css"
import Page404 from "./Pages/404";
import Social from "./Pages/Social";
import Projects from "./Pages/Projects";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/*" element={<Page404 />}></Route>
      <Route path="/social" element={<Social />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
    </Routes>
  )
}