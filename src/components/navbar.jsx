import React from "react";

// Stateless Functional Component
const Navbar = ({ totalCounters }) => {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <h1 class="navbar-brand">
          Navbar
          <span className="badge bg-pill bg-secondary mx-2">
            {totalCounters}
          </span>
        </h1>
      </div>
    </nav>
  );
}

export default Navbar;
