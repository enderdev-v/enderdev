import Home from "./pages/Home";
import Page404 from "./pages/404";
import Projects from "./pages/projects";
import { Route, Routes } from "react-router-dom";

export default function App() {


  return (
    <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/Projects" element={<Projects />}></Route>
    <Route path="*" element={<Page404 />}></Route>
    </Routes>
  )
}