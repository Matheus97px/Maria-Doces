import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Product from "./pages/product/Product"
import { CartProvider } from "./context/CartContext"
import CartDrawer from "./components/cart/CartDrawer"
import Pascoa from "./pages/pascoa/Pascoa"

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />
                <CartDrawer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Product />} />
                    <Route path="/pascoa" element={<Pascoa />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    )
}

export default App