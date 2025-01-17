import Nav from  "./components/Nav";
import Hero from  "./components/Hero";
import Highlights from "./components/Highlights";
import React from "react"
import Model from "./components/Model";
import Features from "./components/Features";
import * as Sentry from "@sentry/react";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";

const App=() =>{
  
  
  return (
    <main className="bg-black">
      <Nav />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer  />
     
    </main>
      

    
    

  )
}
export default Sentry.withProfiler(App);