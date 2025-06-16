import  Navbar from "../Navbar"
import Hero from "../Hero"
import Card from "../Card"
import ProductsPage from "../ProductsPage"
import Interact from "../Interact"
import FooterLink from "../FooterLink"
import { useState } from "react"
import { toast } from "react-toastify"

const MainPage = () => {
    const [count, setCount] = useState(0);
    // const handleAddToCart = () => setCount(count + 1)
    const handleAddToCart = () => {
        setCount(count + 1 )
        toast.success('Added to cart!')
        
    }
return (
    <>
    <Navbar count={count} />
    <Hero />
    <Card />
    <ProductsPage onAddToCart={handleAddToCart} />
    <Interact />
    <FooterLink />
    </>
)
}

export default MainPage
