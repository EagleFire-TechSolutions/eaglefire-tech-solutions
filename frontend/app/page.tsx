import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/section/Hero";
import About from "@/components/section/About";
import Contact from "@/components/section/Contact";
import Services from "@/components/section/Service";
import Projects from "./projects/page";
import CaseStudyPage from "./projects/[slug]/page";

export default function Home(){
  return(
    <>
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Services/>
      <Contact/>
     
      
    
         
    </main>
<Footer/>
    </>
  )
}