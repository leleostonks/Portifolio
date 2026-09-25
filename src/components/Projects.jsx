import { projects } from "../data";

export const Projects = () => (
  <section id="projetos" className="section">
    <h2 className="section-title">Projetos</h2>
    <div className="grid">
      {projects.map((project) => (
        <article key={project.title} className="card project">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <ul className="tags">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <div className="project-links">
            {project.demo && (
              <a href={import.meta.env.BASE_URL + project.demo} target="_blank" rel="noreferrer">
                Ver demo →
              </a>
            )}
            {project.code && (
              <a href={project.code} target="_blank" rel="noreferrer">
                Código →
              </a>
            )}
          </div>
        </article>
      ))}
    </div>
  </section>
);
