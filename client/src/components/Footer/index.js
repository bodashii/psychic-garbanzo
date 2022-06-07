import React from "react";
import "bulma/css/bulma.min.css";

function Footer() {
  return (
    <div className="container">
      <h4 className="title is-4 has-text-centered">Contact</h4>
      <div className="container is-fluid is-justify-content-center is-flex-direction-row">
        <div className="columns">
          <div className="column">
            <a
              target="_blank"
              href="https://github.com/maddnty"
              rel="noreferrer"
            >
              git
            </a>
          </div>
          <div className="column">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nicolas-young-818560227/"
              rel="noreferrer"
            >
              linked in
            </a>
          </div>
        </div>

        <div className="label">Email</div>
        <div className="control">
          <input className="input" type="text" placeholder="this@email.com" />
        </div>
        <div className="label">Your message</div>
        <textarea className="textarea" placeholder="Your text here!" />
      </div>

      <footer className="footer">
        <div class="content has-text-centered">
          <p>
            <strong>Nicolas Young's Portfolio</strong> by Nicolas Young.
            <br />
            The source code is licensed
            <a href="http://opensource.org/licesnses/mit-license.php"> MIT</a>.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
