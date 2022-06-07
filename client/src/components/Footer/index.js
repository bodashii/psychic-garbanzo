import React from "react";

function Footer() {
  return (
    <div className="container">
      <div className="box">
        <h4 className="title is-4 has-text-centered">Contact</h4>
        <div className="container">
          <div className="is-flex">
            <a target="_blank" href="https://github.com/maddnty">
              git
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/nicolas-young-818560227/">
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
