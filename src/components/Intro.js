import React from "react";
import "../index.css";

const Intro = () => {
  return (
    <section id="intro">
      <img
        src="/profile.jpg"
        alt="Profile"
        style={{ width: "150px", borderRadius: "50%" }}
      />
      <h1>Zaina Nadeem</h1>
      <h3>Full Stack Web Developer & Graphic Designer</h3>
      <p>Email: zaina@example.com | Phone: +92-300-1234567</p>
      <p>Location: Lahore, Pakistan</p>
    </section>
  );
};

export default Intro;
