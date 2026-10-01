import { projects } from "@/data/project";

type CaseStudyPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function CaseStudyPage({
  params,
}: CaseStudyPageProps) {
  const {slug} = await params
  const project = projects.find(
    (project) => project.id === slug
  );

  if (!project) {
    return <div>Project not found.</div>;
  }

 return (
  <main className="case-study-page">

    {/* Case Study Hero */}
    <section className="case-study-hero section">
      <div className="container">

        <p className="case-study-hero__eyebrow">
          CASE STUDY
        </p>

        <h1 className="case-study-hero__title">
          {project.title}
        </h1>

        <p className="case-study-hero__description">
          {project.description}
        </p>

        <div className="case-study-hero__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

      </div>
    </section>
    {/* Project Overview */}
<section className="case-study-overview section">
  <div className="container">

    <div className="section-heading">
      <p className="section-heading__eyebrow">
        PROJECT OVERVIEW
      </p>

      <h2 className="section-heading__title">
        From Healthcare Challenges to a Structured Digital System
      </h2>
    </div>

    <div className="case-study-overview__grid">

      <div className="case-study-overview__card">
        <span className="case-study-overview__number">
          01
        </span>

        <h3>
          The Challenge
        </h3>

        <p>
          Healthcare workflows can become difficult to manage
          when patient information, appointments, doctors, and
          medical reports are handled through disconnected
          processes.
        </p>
      </div>

      <div className="case-study-overview__card">
        <span className="case-study-overview__number">
          02
        </span>

        <h3>
          The Solution
        </h3>

        <p>
          We developed a full-stack hospital management system
          that connects patients and doctors through structured
          authentication, appointment management, dashboards,
          and secure report workflows.
        </p>
      </div>

    </div>

  </div>
</section>
{/* Key Features */}
<section className="case-study-features section">
  <div className="container">

    <div className="section-heading">
      <p className="section-heading__eyebrow">
        WHAT'S INSIDE
      </p>

      <h2 className="section-heading__title">
        Features Built Around Real Healthcare Workflows
      </h2>
    </div>

    <div className="case-study-features__grid">
      {project.features.map((feature) => (
        <article
          className="case-study-feature"
          key={feature.number}
        >
          <span className="case-study-feature__number">
            {feature.number}
          </span>

          <h3 className="case-study-feature__title">
            {feature.title}
          </h3>

          <p className="case-study-feature__description">
            {feature.description}
          </p>
        </article>
      ))}
    </div>

  </div>
</section>
{/* Technology & Architecture */}
<section className="case-study-architecture section">
  <div className="container">

    <div className="section-heading">
      <p className="section-heading__eyebrow">
        TECHNOLOGY & ARCHITECTURE
      </p>

      <h2 className="section-heading__title">
        Built With a Structured Full-Stack Architecture
      </h2>

      <p className="case-study-architecture__intro">
        The system is organized into connected layers that keep
        the frontend, backend, database, and APIs working together
        as one reliable application.
      </p>
    </div>

    <div className="case-study-architecture__diagram">

      <div className="architecture-layer">
        <span className="architecture-layer__number">
          01
        </span>

        <div>
          <h3>Frontend</h3>
          <p>
            Next.js • React • TypeScript
          </p>
        </div>
      </div>

      <span className="architecture-connection">
        ↓
      </span>

      <div className="architecture-layer">
        <span className="architecture-layer__number">
          02
        </span>

        <div>
          <h3>Backend & API</h3>
          <p>
            Node.js • Express.js • REST APIs
          </p>
        </div>
      </div>

      <span className="architecture-connection">
        ↓
      </span>

      <div className="architecture-layer">
        <span className="architecture-layer__number">
          03
        </span>

        <div>
          <h3>Database</h3>
          <p>
            MongoDB • Mongoose
          </p>
        </div>
      </div>

    </div>

  </div>
</section>
{/* Project Screenshots */}
<section className="case-study-screenshots section">
  <div className="container">

    <div className="section-heading">
      <p className="section-heading__eyebrow">
        PROJECT SCREENSHOTS
      </p>

      <h2 className="section-heading__title">
        A Look Inside the System
      </h2>

      <p className="case-study-screenshots__intro">
        Explore selected interfaces from the hospital management
        system and see how the platform brings different
        healthcare workflows together.
      </p>
    </div>

    <div className="case-study-screenshots__grid">

      <div className="case-study-screenshot case-study-screenshot--featured">
        <div className="case-study-screenshot__placeholder">
          <span>HMS Dashboard Screenshot</span>
        </div>
      </div>

      <div className="case-study-screenshot">
        <div className="case-study-screenshot__placeholder">
          <span>Patient Dashboard Screenshot</span>
        </div>
      </div>

      <div className="case-study-screenshot">
        <div className="case-study-screenshot__placeholder">
          <span>Doctor Dashboard Screenshot</span>
        </div>
      </div>

    </div>

  </div>
</section>
{/* Development Process */}
<section className="case-study-process section">
  <div className="container">

    <div className="section-heading">
      <p className="section-heading__eyebrow">
        DEVELOPMENT PROCESS
      </p>

      <h2 className="section-heading__title">
        From Planning to a Working System
      </h2>

      <p className="case-study-process__intro">
        The HMS was developed through a structured process that
        moved from requirements and interface planning to
        full-stack development, testing, and deployment.
      </p>
    </div>

    <div className="case-study-process__timeline">

      <article className="case-study-process__step">
        <span className="case-study-process__number">
          01
        </span>

        <div>
          <h3>Plan</h3>

          <p>
            Requirements, user roles, features, workflows,
            sitemap, and technical specifications.
          </p>
        </div>
      </article>

      <article className="case-study-process__step">
        <span className="case-study-process__number">
          02
        </span>

        <div>
          <h3>Design</h3>

          <p>
            Interface structure, responsive layouts,
            reusable components, and design decisions.
          </p>
        </div>
      </article>

      <article className="case-study-process__step">
        <span className="case-study-process__number">
          03
        </span>

        <div>
          <h3>Build</h3>

          <p>
            Next.js frontend, Express backend, MongoDB database,
            APIs, authentication, and core workflows.
          </p>
        </div>
      </article>

      <article className="case-study-process__step">
        <span className="case-study-process__number">
          04
        </span>

        <div>
          <h3>Test</h3>

          <p>
            Functional testing, validation, authorization,
            security checks, responsive testing, and refinement.
          </p>
        </div>
      </article>

      <article className="case-study-process__step">
        <span className="case-study-process__number">
          05
        </span>

        <div>
          <h3>Deploy</h3>

          <p>
            Production configuration, deployment, verification,
            and preparation for ongoing maintenance.
          </p>
        </div>
      </article>

    </div>

  </div>
</section>
{/* Case Study CTA */}
<section className="case-study-cta section">
  <div className="container">

    <div className="case-study-cta__content">

      <p className="case-study-cta__eyebrow">
        HAVE A PROJECT IN MIND?
      </p>

      <h2 className="case-study-cta__title">
        Let’s Build Your Next Digital Solution.
      </h2>

      <p className="case-study-cta__description">
        From planning and design to development and deployment,
        EagleFire builds structured digital solutions around
        real project requirements.
      </p>

      <div className="case-study-cta__actions">

        <a
          href="#contact"
          className="case-study-cta__button"
        >
          Start a Project
        </a>

        <a
          href="#projects"
          className="case-study-cta__link"
        >
          View More Projects
          <span>→</span>
        </a>

      </div>

    </div>

  </div>
</section>

  </main>
);
}