"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}
    >
    <nav className="navbar__inner container">
        {/*logo*/}
        <a href="#home" className="navbar__logo">
            EagleFire Tech Solutions
            </a>
         {/*navlinks*/}
         <div className="navbar__links">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
         </div>
          {/*CTA*/}
          <a href="#contact" className="navbar__cta">
            Let&apos;s Talk
          </a>
            {/*Mobile menu btn*/}
            <button type="button"
            className="navbar__menu-button"
             aria-label="Open Navigation Menu"
             onClick={()=> setIsMenuOpen(!isMenuOpen)}
             >
                 ☰
            </button>

    </nav>

    {isMenuOpen &&(
        <div className="navbar__mobile-menu">
            <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)}>About Us</a>
            <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#contact" 
              className="navbar__mobile-cta"
             aria-label="Open Navigation Menu"
            onClick={() => setIsMenuOpen(false)}>
                Let&apos;s Talk</a>
        </div>
    )}
</header>
    )
}