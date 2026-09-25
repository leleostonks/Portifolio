import { useState } from "react";

const links = [
  ["#sobre", "Sobre"],
  ["#experiencia", "Experiência"],
  ["#contato", "Contato"],
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="navbar-logo" href="#inicio">
        LCM<span>.</span>
      </a>
      <button
        className="navbar-toggle"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? "✕" : "☰"}
      </button>
      <nav className={open ? "navbar-links open" : "navbar-links"}>
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};
