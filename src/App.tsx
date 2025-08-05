import { useState } from "react";
import Home from "./pages/Home";
import Page404 from "./pages/404";
import Projects from "./pages/projects";

export default function App() {

  const [path] = useState(window.location.pathname)


  return path === "/" ? (
    <Home />
  ) : path === "/projects" ? (
    <Projects />
  ) : (
    <Page404 />
  );
}