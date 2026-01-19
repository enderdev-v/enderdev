import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Page404 from "./pages/404";
import Social from "./pages/Social";
import Projects from "./pages/Projects";
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