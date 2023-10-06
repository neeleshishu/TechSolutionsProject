"use client"

import Accordion from "./components/Accordion";
import Buildtogetheir from "./components/Buildtogetheir";
import Customers from "./components/Customers";
import Design from "./components/Design";
import Footer from "./components/Footer";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import Projectworks from "./components/Projectworks";
import Subscription from "./components/Subscription";
import Whatwework from "./components/Whatwework";



const Home = () => {
  return (
    <>
      <div className="bg-slate-200">
        <Navbar />
        <Herosection />
      </div>
      <Customers />
      <Whatwework />
      <Projectworks />
      <Design />
      <Subscription />
      <Accordion />
      <Buildtogetheir />
      <Footer/>
    </>
  )
}

export default Home;