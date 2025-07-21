import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Page404 from "./pages/404";
import Projects from "./pages/projects";
const eventname = 'statechange';

export default function App() {

  const [path, setPath] = useState(window.location.pathname)
  window.history.pushState({}, '', path);
  window.dispatchEvent(new Event(eventname));
  
  useEffect(() => {
    const urlChange = () => {
      setPath(window.location.pathname);
    }

    window.addEventListener(eventname, urlChange);
    return () => {
      window.removeEventListener(eventname, urlChange);
    }
  }, []);

  return path === "/" ? (
    <Home />
  ) : path === "/projects" ?
    (
      <Projects />
    ) : (
      <Page404 />
    );
}