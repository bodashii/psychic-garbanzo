import React from "react";
import "bulma/css/bulma.min.css";

function About() {
  return (
    <section className="section">
      <div className="container is-fluid d-flex">
        <h1
          className="title is-1 has-text-centered has-justify-content-center"
          id="about"
        >
          Nicolas Young
        </h1>
        <figure class="image ">
          <img src="../../logo512.png" alt="logo2" />
        </figure>

        <h3 className="title is-3 has-text-centered">Developer, Designer, Doer.</h3>
      </div>

          <article className="container">
              
              <br/>
        <h5 className="title is-5 has-text-centered">Hello World!</h5>
        <p className="content">
          An avid gamer from my first console. The Super Nintendo entertainment
          System for those curious. I took up programming early around the age
          of 10. Even though some concepts were hard to understand at an early
          age. The accomplishment and challenge of telling a computer how and
          what to do was refreshing since its still a fairly new field. After
          some exposure to computer science and video game design I wanted to
          pursue the tech field. I took off for college but sadly it wasn't in
          my cards to attend UTSA at that time. You know life and all that. Well
          here I am ten years later. With my fullstack developer certificate and
          I'm ready for new challenges and to further my own education and
          skills.
        </p>
      </article>
    </section>
  );
}

export default About;
