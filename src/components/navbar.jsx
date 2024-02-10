import React from "react";

// Stateless Functional Component
function navbar(props) {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
          <span className="badge bg-pill bg-secondary mx-2">
            {props.totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
}

export default navbar;
