import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Footer from "./components/Footer";
import Appointment from "./pages/Appointment"
import Aboutus from "./pages/Aboutus"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"


function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
   
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App

