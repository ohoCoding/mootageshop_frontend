// import Testimonials from "./sections/Testimonials";
import Shop from "./sections/Shop";
import Category from "./sections/Category";
import Features from "./sections/Features";
import Hero from "./sections/Hero";
import Nav from "./sections/Nav";
import Blog from "./sections/Blog";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="relative">
      <Nav/>
      <Hero/>
      <Features/>
      {/* <Category/> */}
      <Shop/>
      {/* <Testimonials/> */}
      {/* <Blog/> */}
      <Footer/>


    </div>
  )
}