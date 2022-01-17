const React = require("react");

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img
          src="https://e7.pngegg.com/pngimages/134/375/png-clipart-logo-yellow-font-bread-text-orange-thumbnail.png"
          width="30"
          height="30"
          class="d-inline-block align-top"
          alt=""
        />{" "}
        Backery-Activity
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/breads">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

module.exports = NavBar;
