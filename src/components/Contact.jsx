import { profile } from "../data";

export const Contact = () => (
  <section id="contato" className="section contact">
    <h2 className="section-title">Contato</h2>
    <p className="lead">
      Estou em busca de uma oportunidade como Desenvolvedor Júnior. Vamos conversar!
    </p>
    <ul className="contact-list">
      <li>
        <a href={`mailto:${profile.email}`}>✉ {profile.email}</a>
      </li>
      <li>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub · leleostonks
        </a>
      </li>
      <li>
        <a href={profile.instagram} target="_blank" rel="noreferrer">
          Instagram · @leleo_zzz
        </a>
      </li>
      <li>● {profile.location}</li>
    </ul>
  </section>
);
