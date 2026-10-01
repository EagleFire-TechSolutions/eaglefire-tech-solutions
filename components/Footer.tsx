export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer__container container">
                {/*Brand*/}
                <div className="footer__brand">
                    <a href="#home" className="footer__logo">
                        EagleFire Tech Solutions
                    </a>
                    <p className="footer__tagline">
                         BUILD ABOVE EXPECTATIONS
                    </p>
                </div>
                {/*navigation*/}
                <nav className="footer__nav" aria-label="Footer Navigation">
                    <a href="#home">Home</a>
                    <a href="#projects">Projects</a>
                    <a href="#about">About Us</a>
                    <a href="#service">Services</a>
                    <a href="#contact">Contact</a>
                </nav>
                {/*connect*/}
                <div className="footer__connect">
                    <h3>Connect</h3>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        Github
                    </a>
                     <a href="#" target="_blank" rel="noopener noreferrer">
                        Linkdin
                    </a>
                     <a href="mailto:your-email@example.com">
                        Email
                    </a>
                     <a href="#" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                    </div> 
            </div>
            {/*divider*/}
            <div className="footer__divider">
                {/*bottom*/}
                 <div className="footer__bottom container">
        <p>
          © 2026 Eagle Fire Tech Solutions. All rights reserved.
        </p>

        <p>
          Built with modern technology.
        </p>
        </div>
            </div>
        </footer>
    )
}