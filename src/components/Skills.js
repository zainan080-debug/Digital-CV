import React from "react";

const Skills = () => {
  const skills = ["Programming & Frameworks: React JS, Node.js, Express, MongoDB, Python, Django, SQL", "Front-end Tools: HTML5, CSS3, Tailwind CSS, Bootstrap, Sass","Version Control: Git, GitHub/GitLab","Database Management: MySQL, PostgreSQL, Firebase","Design & UI/UX: Figma, Adobe XD, Canva","Other Tools: VS Code, Postman, Chrome DevTools, npm/yarn"];
  return (
    <section id="skills">
      <h2>Professional Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
