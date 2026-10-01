import ProjectList from "@/components/projects/projectList";

export default function Projects() {
  return (
    <main className="projects-page">

      {/* Projects Hero */}
      <section id="projects">
      <section className="projects-hero section">
        <div className="container">
          <p className="projects-hero__eyebrow">
            OUR PROJECTS
          </p>

          <h1 className="projects-hero__title">
            Digital Solutions Built With Purpose.
          </h1>

          <p className="projects-hero__description">
            Explore a selection of digital products and systems
            built with modern technologies, structured development,
            and a focus on practical results.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="projects-featured section">
        <div className="container">

          <div className="section-heading">
            <p className="section-heading__eyebrow">
              FEATURED PROJECTS
            </p>

            <h2 className="section-heading__title">
              What We&apos;sve Built
            </h2>
          </div>

          <ProjectList />

        </div>
      </section>

      {/* CTA */}
      <section className="projects-cta section">
        <div className="container">
          <div className="projects-cta__content">

            <p className="projects-cta__eyebrow">
              HAVE AN IDEA?
            </p>

            <h2 className="projects-cta__title">
              Let&apos;s Build Your Next Digital Solution.
            </h2>

            <p className="projects-cta__description">
              Have a project in mind? Let&apos;s turn your idea into
              a structured, reliable, and modern digital product.
            </p>

            <a
              href="#contact"
              className="projects-cta__button"
            >
              Start a Project
            </a>

          </div>
        </div>
      </section>
</section>
    </main>
  );
}