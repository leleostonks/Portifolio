import { profile, skills, stack, softSkills, languages } from "../data";

const Tags = ({ items }) => (
  <ul className="tags">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);

export const About = () => (
  <section id="sobre" className="section">
    <h2 className="section-title">Sobre mim</h2>
    <p className="lead">{profile.summary}</p>

    <div className="grid">
      {skills.map(({ group, items }) => (
        <div key={group} className="card">
          <h3>{group}</h3>
          <Tags items={items} />
        </div>
      ))}
    </div>

    <div className="grid grid-3">
      <div className="card">
        <h3>Tecnologias</h3>
        <Tags items={stack} />
      </div>
      <div className="card">
        <h3>Soft skills</h3>
        <Tags items={softSkills} />
      </div>
      <div className="card">
        <h3>Idiomas</h3>
        <Tags items={languages} />
      </div>
    </div>
  </section>
);
