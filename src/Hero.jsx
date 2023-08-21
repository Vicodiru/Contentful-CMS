import React from "react";
import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod nam
            quasi dicta possimus repellat nulla molestiae eius esse! Ratione
            magni sint error voluptatibus quas voluptatum placeat suscipit
            officia est distinctio! Vero ad, aut aspernatur ipsam magnam sequi
            mollitia recusandae. Eveniet quam odio temporibus pariatur libero
            nulla aspernatur quod obcaecati totam numquam
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
