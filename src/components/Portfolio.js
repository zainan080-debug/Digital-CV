import React from "react";

const Portfolio = () => {
  const projects = [
    { title: "Portfolio Website", link: "#" },
    { title: "E-commerce App", link: "#" },
    { title: "Weather App", link: "#" },
  ];
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        {projects.map((p) => (
          <li key={p.title}>
            <a href={p.link} target="_blank" rel="noreferrer">
              {p.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Portfolio;
