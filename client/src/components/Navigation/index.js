import React from "react";
import "bulma/css/bulma.min.css";

function Nav() {
  return (
    <div>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="../../logo192.png" alt="logo" />
          </a>

          <a class="navbar-item is-hoverable" href="#about">
            About
          </a>
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Portfolio</a>
              <div class="navbar-dropdown is-hidden">
                <a class="navbar-item">Proj 1</a>
                <a class="navbar-item">Proj 2</a>
                <a class="navbar-item">Proj 3</a>
                <hr class="navbar-divider" />
              </div>
          </div>

          <a class="navbar-item is-hoverable" href="#contact">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
