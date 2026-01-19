import { Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Page404 from "./Pages/404";
import Social from "./Pages/Social";
import Projects from "./Pages/Projects";
import "./css/index.css";

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