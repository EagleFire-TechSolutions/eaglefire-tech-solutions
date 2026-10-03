import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
} from "react-icons/si";
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__container container">

        {/* Hero Content */}

        <div className="hero__content">

          <div className="hero__logo">
            EagleFire Tech Solutions
          </div>

          <p className="hero__eyebrow">
            BUILD ABOVE EXPECTATIONS
          </p>

          <h1 className="hero__title">
            FULL-STACK WEB DEVELOPMENT
          </h1>

          <p className="hero__description">
            We build modern, responsive web applications that turn ideas
            into scalable digital solutions.
          </p>

          <div className="hero__actions">

            <a
              href="#projects"
              className="hero__primary-button"
            >
              View Our Work
            </a>

            <a
              href="#contact"
              className="hero__secondary-button"
            >
              Let&apos;s Talk
            </a>

          </div>

        </div>


        {/* Hero Visual */}

        <div className="hero__visual">

          <div className="hero__visual-content">

           <div className="hero__tech-item hero__tech-item--react">
  <SiReact />
</div>

<div className="hero__tech-item hero__tech-item--typescript">
  <SiTypescript />
</div>

<div className="hero__tech-item hero__tech-item--next">
  <SiNextdotjs />
</div>

<div className="hero__tech-item hero__tech-item--node">
  <SiNodedotjs />
</div>

            <div className="hero__eagle">
              <img
    src="/images/logo.png"
    alt="Eagle Fire Tech Solutions"
  />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}