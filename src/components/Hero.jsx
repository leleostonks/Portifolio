import { profile } from "../data";

export const Hero = () => (
  <section id="inicio" className="hero">
    <p className="hero-kicker">Olá, eu sou</p>
    <h1>{profile.name}</h1>
    <p className="hero-role">{profile.role}</p>
    <p className="hero-text">
      Estudante de Engenharia de Software na FIAP, focado em desenvolvimento de
      sistemas, inteligência artificial e segurança cibernética.
    </p>
    <div className="hero-actions">
      <a className="btn btn-primary" href="#contato">
        Entre em contato
      </a>
      <a className="btn" href={import.meta.env.BASE_URL + profile.cv} download>
        Baixar currículo
      </a>
    </div>
  </section>
);
