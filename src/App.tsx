import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Page404 from "./pages/404";
import Social from "./pages/Social";
import Projects from "./pages/Projects";
import "./css/index.css";
import TermsOfService from "./pages/TermsOfService";
import PolicyPrivacy from "./pages/PolicyPrivacy";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/*" element={<Page404 />}></Route>
      <Route path="/social" element={<Social />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
      <Route path="/terms" element={<TermsOfService />}></Route>
      <Route path="/policy" element={<PolicyPrivacy />}></Route>
    </Routes>
  )
}