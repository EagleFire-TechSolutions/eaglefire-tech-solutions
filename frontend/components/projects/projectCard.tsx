// import project from "@/data/project";

type ProjectCardProps = {
    project:{
     id : string,
     title : string,
     catagory: string,
     description : string,
    image : string,
    technologies: string[],
    link : string
    }
};

export default function ProjectCard({ project } : ProjectCardProps){
    return(
        <article className="project-card">
            <div className="project-card__image">
                <img src={project.image} alt = {project.title}/>
            </div>
            <div className="project-card__content">
                <p className="project-card__catagory">{project.catagory}</p>
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>
                <div className="project-card__technologies">
                    {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>

                    ))};
                </div>
                <a 
                href={project.link}
                className="project-card__link">
                    View Project<span>→</span>
                </a>
            </div>
        </article>
    )
}