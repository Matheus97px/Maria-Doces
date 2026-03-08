import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/Home"
import Product from "./pages/product/Product"

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/product" element={<Product />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App