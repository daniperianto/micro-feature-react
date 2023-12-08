
import { Routes, Route } from "react-router-dom"
import Wilayah from "./pages/wilayah";


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Wilayah />} />
    </Routes>
  )

}