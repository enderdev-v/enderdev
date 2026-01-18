import Home from "./Pages/Home"
import { Routes, Route } from "react-router";
import "./css/index.css"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  )
}