
import { Routes, Route } from "react-router-dom"
import WordScramble from "./pages/WordScramble";
import Home from "./pages/Home";


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/word-scramble" element={<WordScramble />} />
    </Routes>
  )

}