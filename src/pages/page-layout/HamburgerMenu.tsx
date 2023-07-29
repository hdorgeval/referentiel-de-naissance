import { FC, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { websiteConfig } from '../../website.config';

export const HambugerMenu: FC = () => {
  const location = useLocation();
  const isOnHomePage = useMemo(() => {
    return location.pathname === '/';
  }, [location.pathname]);
  return (
    <nav className="navbar navbar-dark sticky-top position-absolute top-0 end-0 w-100">
      <div
        className={`container-fluid pe-0 me-1 d-flex flex-row ${
          websiteConfig.hamburgerMenuPosition === 'left' ? 'flex-row-reverse' : ''
        }`}
      >
        {isOnHomePage ? (
          <div className="flex-grow-1"></div>
        ) : (
          <Link to="/" className="navbar-brand text-reset" aria-label="Accueil" title="Accueil">
            <i className="bi bi-house-up text-white fs-navbar-toggler-3"></i>
          </Link>
        )}
        <button
          className="navbar-toggler pt-1-half border border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          title="Menu"
          aria-label="Menu"
          data-tour-id="step-1"
        >
          <i className="bi bi-list text-white fs-navbar-toggler-2"></i>
        </button>

        <div
          className={`offcanvas text-bg-dark ${
            websiteConfig.hamburgerMenuPosition === 'left' ? 'offcanvas-start' : 'offcanvas-end'
          }`}
          tabIndex={-1}
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              {websiteConfig.websiteShortTitle}
            </h5>
            <button
              id="hamburger-close-button"
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body fs-6 pt-0">
            <ul className="navbar-nav justify-content-start align-items-start flex-grow-1 pe-3">
              <li className="nav-item w-100 text-start">
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <Link
                    to="/"
                    className="text-decoration-none text-light"
                    aria-current="page"
                    title="Accueil"
                    aria-label="Accueil"
                  >
                    <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                      Accueil
                    </span>
                  </Link>
                  <Link
                    to="/qui-suis-je"
                    className="text-decoration-none text-light"
                    title="Qui suis-je ?"
                    aria-label="Qui suis-je ?"
                  >
                    <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                      Qui suis-je ?
                    </span>
                  </Link>
                  {/* <Link to="/temoignages" className="text-decoration-none text-light">
                    <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                      Témoignages
                    </span>
                  </Link> */}
                </div>
              </li>
              <li className="nav-item w-100 text-start mt-3">
                <div className=" w-100 border-bottom border-secondary fs-5 text-secondary">
                  Particuliers
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <Link to="/#">
                    <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                      Chemin de vie par le tarot de Marseille
                      <span className="align-text-top">*</span>
                    </span>
                  </Link>
                </div>
                <div className="pt-2 border-bottom border-secondary w-100">
                  <span className="align-text-top">*</span>
                  <span className="ms-2">Basé sur le référentiel de naissance</span>
                </div>
              </li>

              {/* <li className="nav-item w-100 text-start mt-3">
                <div className="w-100 border-bottom border-secondary fs-6 text-secondary d-flex p-1 flex-row flex-wrap align-items-center">
                  <span>Mon espace client</span>
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <AccountFullNameBadge />
                  <CreateAccountBadge />
                  <LoginAccountBadge />
                  <LogoutAccountBadge />
                </div>
              </li> */}
              {/* <li className="nav-item w-100 text-start mt-3">
                <div className="w-100 border-bottom border-secondary fs-6 text-secondary d-flex p-1 flex-row flex-wrap align-items-center">
                  <span>Crédits photos</span>
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                    John Doe
                  </span>
                </div>
              </li> */}
              <li className="nav-item w-100 text-start mt-3">
                <div className="w-100 border-bottom border-secondary fs-6 text-secondary d-flex p-1 flex-row flex-wrap align-items-center">
                  <span>Confiance numérique</span>
                </div>
                <div className="d-flex p-1 flex-row flex-wrap align-items-center">
                  <Link to="/mentions-legales">
                    <span className="badge rounded-pill text-bg-dark fs-7 border border-secondary m-1">
                      Mentions légales
                    </span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

HambugerMenu.displayName = 'HambugerMenu';
