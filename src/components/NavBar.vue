<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/living-knows-no-age">
        <img src="@/images/match.jpg" width="30" height="30" class="d-inline-block align-top" />
        LivingKnowsNoAge
      </RouterLink>
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
          <!-- <li class="nav-item">
            <RouterLink class="nav-link" to="/living-knows-no-age">Start</RouterLink>
          </li> -->
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
            <RouterLink class="nav-link" to="/matching-results">Matching</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contract-creation">Vertrag erstellen</RouterLink>
          </li>
        </ul>
        <form class="d-flex">
          <div class="input-group">
            <input class="form-control" type="search" placeholder="Suche" aria-label="Suche" />
            <button class="btn btn-outline-success" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>
