
import { Routes, Route } from "react-router-dom"
import WordScramble from "./pages/WordScramble";


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<WordScramble />} />
    </Routes>
  )

}