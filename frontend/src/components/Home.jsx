import About from "./About"
import Footer from "./Footer"
import HeroBanner from "./HeroBanner"
import Login from "./Login"
import Nav from "./Nav"
import Products from "./Products"
import Review from "./Review"
import Services from "./Services"

const Home = () => {
  return (
    <div>
      <Nav/>
      <HeroBanner/>
      <Products/>
      <About/>
      <Review/>
      <Services/>
      <Login/>
      <Footer/>
    </div>
  )
}

export default Home