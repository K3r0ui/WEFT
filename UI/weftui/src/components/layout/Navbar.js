import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'react-oidc-context';
import { useUser } from '../../UserContext';

function Navbar() {
        const { user } = useUser();
        const access_token = user?.access_token; 
        const username = user?.profile?.preferred_username;
      const [isNavbarOpen, setNavbarOpen] = useState(false);
      const auth = useAuth();
      const toggleNavbar = () => {
        setNavbarOpen(!isNavbarOpen);
      };
      const isUser = () => {
        if (!user || !user.profile) {
        }
    
        const clientRoles = user.profile.client_roles || [];
        console.log(user.profile.client_roles)
        return clientRoles.some(role => role.includes('user'));
      };
      useEffect(() => {
        const dropdownHoverScript = document.createElement('script');
        dropdownHoverScript.src = `${process.env.PUBLIC_URL}/assets/vendor/js/dropdown-hover.js`;
        dropdownHoverScript.async = true;
        document.body.appendChild(dropdownHoverScript);
        const megaDropdownScript = document.createElement('script');
        megaDropdownScript.src = `${process.env.PUBLIC_URL}/assets/vendor/js/mega-dropdown.js`;
        megaDropdownScript.async = true;
        document.body.appendChild(megaDropdownScript);
    
        return () => {
          document.body.removeChild(dropdownHoverScript);
          document.body.removeChild(megaDropdownScript);
        };
      }, []);
  return (
    <div>
          <nav className="layout-navbar shadow-none py-0">
      <div className="container">
        <div className="navbar navbar-expand-lg landing-navbar px-3 px-md-8">
          {/* Menu logo wrapper: Start */}
          <div className="navbar-brand app-brand demo d-flex py-0 py-lg-2 me-4 me-xl-8">
            {/* Mobile menu toggle: Start */}
            <button
              className="navbar-toggler border-0 px-0 me-4"
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavbarOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <i className="ti ti-menu-2 ti-lg align-middle text-heading fw-medium"></i>
            </button>
            {/* Mobile menu toggle: End */}
            <Link to="/landing-page" className="app-brand-link">
              <span>
                <svg  version="1.0" xmlns="http://www.w3.org/2000/svg"  width="140.000000pt" height="52.000000pt" viewBox="0 0 300.000000 202.000000"  preserveAspectRatio="xMidYMid meet">  <g transform="translate(0.000000,202.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M754 1325 c-6 -15 -65 -38 -99 -39 -29 -1 -27 -40 3 -44 12 -2 22 1 22 7 0 13 53 41 77 41 20 0 73 -61 73 -84 0 -23 19 -30 38 -13 22 18 136 47 162 40 15 -4 20 0 20 16 0 14 -6 21 -20 21 -11 0 -20 -4 -20 -8 0 -8 -101 -32 -136 -32 -24 0 -69 44 -83 83 -11 29 -28 35 -37 12z"/> <path d="M1180 1213 c0 -5 20 -80 45 -167 25 -87 45 -165 45 -172 0 -7 4 -15 9 -19 5 -3 33 56 62 130 29 74 56 135 59 135 6 -1 100 -242 100 -258 0 -7 4 -12 8 -12 10 0 115 361 107 368 -16 17 -36 -21 -64 -125 -18 -65 -35 -125 -38 -133 -4 -14 -102 221 -103 248 -1 34 -20 0 -65 -118 -27 -71 -53 -130 -56 -130 -4 0 -15 31 -24 70 -31 128 -52 185 -69 188 -9 2 -16 -1 -16 -5z"/> <path d="M1690 1035 l0 -185 105 0 c98 0 105 1 105 20 0 18 -6 19 -85 17 l-85 -2 0 72 0 73 56 0 c47 0 55 3 52 18 -3 13 -14 17 -56 17 l-52 0 0 58 0 57 85 0 c78 0 85 2 85 20 0 19 -7 20 -105 20 l-105 0 0 -185z"/> <path d="M1980 1035 c0 -158 2 -185 15 -185 12 0 15 17 15 90 l0 90 50 0 c43 0 50 3 50 20 0 17 -7 20 -50 20 l-50 0 0 55 0 55 85 0 c78 0 85 2 85 20 0 19 -7 20 -100 20 l-100 0 0 -185z"/> <path d="M2212 1203 c3 -14 13 -18 43 -18 l40 0 3 -167 c2 -139 5 -168 17 -168 12 0 15 29 17 168 l3 167 43 -3 c37 -3 42 -1 42 17 0 20 -5 21 -106 21 -95 0 -105 -2 -102 -17z"/> <path d="M730 1170 c-15 -27 -88 -64 -130 -64 -32 -1 -35 -4 -35 -31 0 -27 3 -30 30 -30 23 0 31 5 33 21 3 24 100 75 132 69 26 -5 65 -36 66 -52 2 -28 5 -32 24 -38 26 -8 50 10 50 38 0 23 26 46 53 47 23 0 33 26 17 45 -14 17 -40 9 -40 -14 0 -20 -36 -44 -70 -46 -29 -2 -80 30 -80 50 0 7 -7 16 -16 19 -22 8 -22 8 -34 -14z"/> <path d="M644 1026 c-28 -28 -34 -41 -34 -78 0 -24 7 -54 16 -66 14 -21 14 -25 -14 -71 l-30 -48 30 -17 c16 -10 30 -16 32 -14 1 1 13 24 27 51 21 41 28 47 56 47 50 0 81 20 104 66 18 38 19 49 9 79 -17 52 -62 85 -117 85 -38 0 -50 -5 -79 -34z m154 -21 c33 -39 30 -89 -8 -127 -27 -26 -36 -30 -69 -25 -36 4 -38 3 -61 -39 -12 -24 -27 -44 -31 -44 -13 0 -11 7 16 50 l25 40 -20 32 c-23 38 -25 63 -6 97 31 56 111 64 154 16z"/> <path d="M675 995 c-14 -13 -25 -36 -25 -50 0 -33 42 -75 75 -75 14 0 37 11 50 25 14 13 25 36 25 50 0 14 -11 37 -25 50 -13 14 -36 25 -50 25 -14 0 -37 -11 -50 -25z m85 -15 c11 -11 20 -27 20 -35 0 -17 -35 -55 -51 -55 -18 0 -46 19 -53 35 -7 20 13 63 33 68 28 8 31 7 51 -13z"/> </g> </svg>  
              </span>
              <span className="app-brand-text demo menu-text fw-bold ms-2 ps-1"></span>
            </Link>
          </div>
          {/* Menu logo wrapper: End */}

          {/* Menu wrapper: Start */}
          <div className={`collapse navbar-collapse landing-nav-menu ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
            <button
              className="navbar-toggler border-0 text-heading position-absolute end-0 top-0 scaleX-n1-rtl"
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarSupportedContent"
              aria-expanded={isNavbarOpen ? 'true' : 'false'}
              aria-label="Toggle navigation"
            >
              <i className="ti ti-x ti-lg"></i>
            </button>
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/landing-page#landingHero">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/landing-page#landingFeatures">Features</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/landing-page#landingTeam">Team</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/landing-page#landingFAQ">FAQ</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/landing-page#landingContact">Contact us</Link>
              </li>
              <li className="nav-item mega-dropdown">
                <a
                  href="javascript:void(0);"
                  className="nav-link dropdown-toggle navbar-ex-14-mega-dropdown mega-dropdown fw-medium"
                  aria-expanded="false"
                  data-bs-toggle="mega-dropdown"
                  data-trigger="hover"
                >
                  <span>Pages</span>
                </a>
                <div className="dropdown-menu p-4 p-xl-8">
                  <div className="row gy-4">
                    {/* Add the other content for the dropdown if needed */}
                  </div>
                </div>
              </li>
              {
                isUser() ? (
                  <></>
                ) : (
                  <li className="nav-item">
                  <Link className="nav-link fw-medium" to="/admin">Admin</Link>
                </li>
                )
              }
                <li className="nav-item">
                  <Link className="nav-link fw-medium" onClick={() => auth.signoutRedirect()} >Logout</Link>
                </li>
            </ul>
          </div>
          {/* Menu wrapper: End */}

          {/* Toolbar: Start */}
          {/* <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li>
              <Link to="/auth-login-cover" className="btn btn-primary" target="_blank">
                <span className="tf-icons ti ti-login scaleX-n1-rtl me-md-1"></span>
                <span className="d-none d-md-block">Login/Register</span>
              </Link>
            </li>
          </ul> */}
          {/* Toolbar: End */}
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
