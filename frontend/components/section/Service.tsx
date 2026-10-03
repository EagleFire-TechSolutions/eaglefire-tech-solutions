"use client";

import { useState } from "react";

export default function Services() {
  const [activeStage, setActiveStage] = useState(0);

  const workStages = [
    {
      number: "01",
      title: "Plan",
      label: "HOW WE PLAN",
      heading: "We Start With Structure, Not Code",
      description:
        "Before development begins, we define the project requirements, goals, users, features, and overall technical structure.",
      items: [
        "Requirements",
        "Project Goals",
        "User & Role Analysis",
        "Feature Planning",
        "Documentation",
        "Sitemap & Specifications",
      ],
    },
    {
      number: "02",
      title: "Design",
      label: "HOW WE DESIGN",
      heading: "Turning Structure Into a Clear Digital Experience",
      description:
        "We translate requirements into practical interfaces through research, wireframes, UI design, design systems, and responsive layouts.",
      items: [
        "Research",
        "Design References",
        "Wireframes",
        "UI Design",
        "Design System",
        "Responsive Design",
      ],
    },
    {
      number: "03",
      title: "Build",
      label: "HOW WE BUILD",
      heading: "From Design to a Working Digital Product",
      description:
        "We build the solution using reusable components, reliable backend systems, databases, and connected APIs.",
      items: [
        "Architecture",
        "Components",
        "Frontend",
        "Backend",
        "Database",
        "API Integration",
      ],
    },
    {
      number: "04",
      title: "Test",
      label: "HOW WE TEST & REFINE",
      heading: "We Test the Product Before We Call It Ready",
      description:
        "We verify functionality, responsiveness, APIs, security, performance, and interface details before release.",
      items: [
        "Functional Testing",
        "Responsive Testing",
        "API Testing",
        "Security Checks",
        "Performance Checks",
        "UI Refinement",
      ],
    },
    {
      number: "05",
      title: "Deploy",
      label: "HOW WE DEPLOY",
      heading: "From Tested Product to Production",
      description:
        "We prepare the production environment, configure required services, deploy the application, and verify the live system.",
      items: [
        "Prepare",
        "Configure",
        "Deploy",
        "Verify",
        "Monitor",
      ],
    },
    {
      number: "06",
      title: "Maintain",
      label: "HOW WE MAINTAIN",
      heading: "Keeping Digital Products Reliable After Launch",
      description:
        "After deployment, we can monitor, fix, improve, update, and adapt digital products as requirements evolve.",
      items: [
        "Monitor",
        "Fix",
        "Improve",
        "Update",
        "Scale",
      ],
    },
  ];

  const currentStage = workStages[activeStage];

  return (
    <main className="services-page">

      {/* =========================
          SERVICES HERO
      ========================= */}
<section id="services">
      <section className="services-hero section">

        <div className="container services-hero__container">

          <div className="services-hero__content">

            <p className="services-hero__eyebrow">
              OUR SERVICES
            </p>

            <h1 className="services-hero__title">
              From Idea to Deployment, We Build With a Process.
            </h1>

            <p className="services-hero__description">
              We turn ideas into structured digital solutions
              through thoughtful planning, modern design,
              reliable development, thorough testing, and
              production-ready deployment.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          CORE SERVICES
      ========================= */}

      <section className="services-core section">

        <div className="container">

          <div className="section-heading services-core__heading">

            <p className="section-heading__eyebrow">
              WHAT WE DO
            </p>

            <h2 className="section-heading__title">
              Digital Services Built for Real-World Needs
            </h2>

            <p className="services-core__intro">
              From modern web applications to backend systems
              and AI-powered solutions, we build digital products
              around the requirements of each project.
            </p>

          </div>


          <div className="services-core__grid">

            {/* Service 01 */}

            <article className="service-card">

              <span className="service-card__number">
                01
              </span>

              <h3 className="service-card__title">
                Web Application Development
              </h3>

              <p className="service-card__description">
                Modern, responsive web applications designed
                for usability, performance, and long-term growth.
              </p>

              <p className="service-card__tech">
                React • Next.js • TypeScript
              </p>

            </article>


            {/* Service 02 */}

            <article className="service-card">

              <span className="service-card__number">
                02
              </span>

              <h3 className="service-card__title">
                CMS Development
              </h3>

              <p className="service-card__description">
                Structured content management solutions that make
                it easier to manage, organize, and update digital content.
              </p>

              <p className="service-card__tech">
                Next.js • CMS • REST APIs
              </p>

            </article>


            {/* Service 03 */}

            <article className="service-card">

              <span className="service-card__number">
                03
              </span>

              <h3 className="service-card__title">
                Dashboards & Management Systems
              </h3>

              <p className="service-card__description">
                Role-based dashboards and management systems
                built around real workflows and operational needs.
              </p>

              <p className="service-card__tech">
                React • Next.js • Node.js
              </p>

            </article>


            {/* Service 04 */}

            <article className="service-card">

              <span className="service-card__number">
                04
              </span>

              <h3 className="service-card__title">
                Database & Backend Development
              </h3>

              <p className="service-card__description">
                Secure backend systems, APIs, databases, and
                server-side functionality designed for reliability.
              </p>

              <p className="service-card__tech">
                Node.js • Express.js • MongoDB
              </p>

            </article>


            {/* Service 05 */}

            <article className="service-card">

              <span className="service-card__number">
                05
              </span>

              <h3 className="service-card__title">
                AI Integration
              </h3>

              <p className="service-card__description">
                Practical AI integrations that connect intelligent
                capabilities with useful digital products and workflows.
              </p>

              <p className="service-card__tech">
                AI APIs • Automation • Web Integration
              </p>

            </article>


            {/* Service 06 */}

            <article className="service-card">

              <span className="service-card__number">
                06
              </span>

              <h3 className="service-card__title">
                Creative & Digital Solutions
              </h3>

              <p className="service-card__description">
                Custom digital experiences, interfaces, and creative
                solutions designed to strengthen a brand&apos;s online presence.
              </p>

              <p className="service-card__tech">
                UI • UX • Digital Experiences
              </p>

            </article>

          </div>

        </div>

      </section>


      {/* =========================
          HOW WE WORK
      ========================= */}

      <section className="services-work section">

        <div className="container">

          <div className="section-heading services-work__heading">

            <p className="section-heading__eyebrow">
              HOW WE WORK
            </p>

            <h2 className="section-heading__title">
              From Idea to a Working Digital Product
            </h2>

            <p className="services-work__intro">
              Every project moves through a structured process —
              from planning and design to development, testing,
              deployment, and continuous improvement.
            </p>

          </div>


          {/* =========================
              PROCESS STAGES
          ========================= */}

          <div className="services-work__stages">

            {workStages.map((stage, index) => (

              <button
                key={stage.number}
                type="button"
                className={`work-stage ${
                  activeStage === index
                    ? "work-stage--active"
                    : ""
                }`}
                onClick={() => setActiveStage(index)}
              >

                <span className="work-stage__number">
                  {stage.number}
                </span>

                <span className="work-stage__title">
                  {stage.title}
                </span>

              </button>

            ))}

          </div>


          {/* =========================
              ACTIVE STAGE CONTENT
          ========================= */}

          <div className="services-work__content">

            <div className="services-work__info">

              <span className="services-work__active-number">
                {currentStage.number}
              </span>

              <p className="services-work__active-label">
                {currentStage.label}
              </p>

              <h3 className="services-work__active-title">
                {currentStage.heading}
              </h3>

              <p className="services-work__active-description">
                {currentStage.description}
              </p>


              <div className="services-work__items">

                {currentStage.items.map((item) => (

                  <span key={item}>
                    {item}
                  </span>

                ))}

              </div>

            </div>


            {/* =========================
                PROCESS VISUAL
            ========================= */}

            <div className="services-work__visual">

              <div
                className={`work-visual work-visual--${
                  activeStage + 1
                }`}
              >

                <div className="work-visual__core">
                  {currentStage.title.toUpperCase()}
                </div>


                <span className="work-visual__node work-visual__node--one">
                  {currentStage.items[0]}
                </span>

                <span className="work-visual__node work-visual__node--two">
                  {currentStage.items[1]}
                </span>

                <span className="work-visual__node work-visual__node--three">
                  {currentStage.items[2]}
                </span>

                <span className="work-visual__node work-visual__node--four">
                  {currentStage.items[3]}
                </span>


                <span className="work-visual__connection work-visual__connection--one"></span>

                <span className="work-visual__connection work-visual__connection--two"></span>

                <span className="work-visual__connection work-visual__connection--three"></span>

                <span className="work-visual__connection work-visual__connection--four"></span>


                <span className="work-visual__particle"></span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          SERVICES CTA
      ========================= */}

      <section className="services-cta section">

        <div className="container">

          <div className="services-cta__container">

            <div className="services-cta__content">

              <p className="services-cta__eyebrow">
                READY TO BUILD?
              </p>

              <h2 className="services-cta__title">
                Have an Idea? Let&apos;s Turn It Into a Digital Solution.
              </h2>

              <p className="services-cta__description">
                Whether you are starting a new project, improving
                an existing system, or exploring a digital idea,
                tell us what you need and let&apos;s discuss the next step.
              </p>

              <a
                href="#contact"
                className="services-cta__button"
              >
                Start a Project
              </a>

            </div>

          </div>

        </div>

      </section>
</section>
    </main>
  );
}