<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/living-knows-no-age">Home</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Registrierung
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <RouterLink class="dropdown-item" to="/student-registration">
                  Wohnraumsuchende
                </RouterLink>
              </li>
              <li>
                <RouterLink class="dropdown-item" to="/senior-registration">
                  Wohnraumgebende
                </RouterLink>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/matching-results">Matching Results</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contract-creation">Vertrag erstellen</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/living-knows-no-age">Living Knows No Age</RouterLink>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Suche" aria-label="Suche" />
          <button class="btn btn-outline-success" type="submit">Suche</button>
        </form>
      </div>
    </div>
  </nav>
</template>
