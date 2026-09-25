import { experience, education, courses } from "../data";

export const Experience = () => (
  <section id="experiencia" className="section">
    <h2 className="section-title">Experiência</h2>
    <ol className="timeline">
      {experience.map((job) => (
        <li key={job.title + job.company}>
          <h3>{job.title}</h3>
          <p className="meta">
            {job.company} · {job.place}
          </p>
          <p>{job.description}</p>
        </li>
      ))}
    </ol>

    <h2 className="section-title">Formação</h2>
    <ol className="timeline">
      {education.map((item) => (
        <li key={item.title}>
          <div className="timeline-head">
            <h3>{item.title}</h3>
            <span className="period">{item.period}</span>
          </div>
          <p className="meta">{item.school}</p>
          {item.note && <p>{item.note}</p>}
        </li>
      ))}
    </ol>

    <h2 className="section-title">Cursos complementares</h2>
    <ul className="tags tags-lg">
      {courses.map((course) => (
        <li key={course}>{course}</li>
      ))}
    </ul>
  </section>
);
