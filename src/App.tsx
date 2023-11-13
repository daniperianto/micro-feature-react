
import DetailProduct from "./pages/detail_products";
import LandingPage from "./pages/landing_pages";
import { Routes, Route } from "react-router-dom"
import Wilayah from "./pages/wilayah";


export default function App() {

  return (
    <Routes>
      <Route path="/products" element={<LandingPage />} />
      <Route path="/products/:id " element={<DetailProduct />} />
      <Route path="/wilayah" element={<Wilayah />} />
    </Routes>
  )

}