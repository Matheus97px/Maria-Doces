import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/footer"
import Navbar from "./components/navbar/navbar"
import Home from "./pages/home/Home"
import Product from "./pages/product/Product"
import { CartProvider } from "./context/CartContext"
import CartDrawer from "./components/cart/CartDrawer"

function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <Navbar />
                <CartDrawer />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Product />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    )
}

export default App