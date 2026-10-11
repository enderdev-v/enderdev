import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Page404 from "./pages/404";
import Social from "./pages/Social";
import Projects from "./pages/Projects";
import "./css/index.css";
import TermsOfService from "./pages/TermsOfService";
import PolicyPrivacy from "./pages/PolicyPrivacy";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState("enderdev");
  return (
    <Routes>
      <Route path="/" element={<Home user={user} setUser={setUser} />}></Route>
      <Route path="/*" element={<Page404 user={user} />}></Route>
      <Route path="/social" element={<Social user={user} />}></Route>
      <Route path="/projects" element={<Projects user={user} />}></Route>
      <Route path="/terms" element={<TermsOfService user={user} />}></Route>
      <Route path="/policy" element={<PolicyPrivacy user={user} />}></Route>
    </Routes>
  )
}