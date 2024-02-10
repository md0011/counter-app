import React from "react";

// Stateless Functional Component
const Navbar = ({ totalCounters }) => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
          <span className="badge bg-pill bg-secondary mx-2">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
