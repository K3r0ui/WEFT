import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom'; 
const LandingPage = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
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
    
    <>
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
              <li className="nav-item">
                <Link className="nav-link fw-medium" to="/new" target="_blank">Admin</Link>
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
        <div data-bs-spy="scroll" className="scrollspy-example">
      <section id="hero-animation">
        <div id="landingHero" className="section-py landing-hero position-relative">
          <img
            src="../../assets/img/front-pages/backgrounds/hero-bg.png"
            alt="hero background"
            className="position-absolute top-0 start-50 translate-middle-x object-fit-cover w-100 h-100"
            data-speed="1" />
          <div className="container">
            <div className="hero-text-box text-center position-relative">
              <h1 className="text-primary hero-title display-6 fw-extrabold">
              </h1>
              <h2 className="hero-sub-title h6 mb-6">
                Production-ready & easy to use Admin Template<br className="d-none d-lg-block" />
                for Reliability and Customizability.
              </h2>
              <div className="landing-hero-btn d-inline-block position-relative">
                <span className="hero-btn-item position-absolute d-none d-md-flex fw-medium"
                  >Join community
                  <img
                    src="../../assets/img/front-pages/icons/Join-community-arrow.png"
                    alt="Join community arrow"
                    className="scaleX-n1-rtl"
                /></span>
                <a href="#landingPricing" className="btn btn-primary btn-lg">Get early access</a>
              </div>
            </div>
            
            <div id="heroDashboardAnimation" class="hero-animation-img">
              <a href="../vertical-menu-template/app-ecommerce-dashboard.html" target="_blank">
                <div id="heroAnimationImg" class="position-relative hero-dashboard-img">
                  <img
                    src="../../assets/img/front-pages/landing-page/ontologynew.png"
                    alt="hero dashboard"
                    class="animation-img"
                    data-app-light-img="front-pages/landing-page/hero-dashboard-light.png"
                    data-app-dark-img="front-pages/landing-page/hero-dashboard-dark.png" />
                  <img
                    src="../../assets/img/front-pages/landing-page/logo-UTTOP.png"
                    alt="hero elements"
                    class="position-absolute hero-elements-img animation-img top-0 start-0"
                    style={{width: '20%'}}
                    data-app-light-img="front-pages/landing-page/hero-elements-light.png"
                    data-app-dark-img="front-pages/landing-page/hero-elements-dark.png" />

                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="landing-hero-blank"></div>
      </section>
      <section id="landingFeatures" className="section-py landing-features">
        <div className="container">
          <div className="text-center mb-4">
            <span className="badge bg-label-primary">Useful Features</span>
          </div>
          <h4 className="text-center mb-1">
            <span className="position-relative fw-extrabold z-1"
              >Everything you need
              <img
                src="../../assets/img/front-pages/icons/section-title-icon.png"
                alt="laptop charging"
                className="section-title-img position-absolute object-fit-contain bottom-0 z-n1" />
            </span>
            to start your next project
          </h4>
          <p className="text-center mb-12">
            Not just a set of tools, the package includes ready-to-deploy conceptual application.
          </p>
          <div className="features-icon-wrapper row gx-0 gy-6 g-sm-12">
            <div className="col-lg-4 col-sm-6 text-center features-icon-box">
              <div className="text-center mb-4">
                <img src="../../assets/img/front-pages/icons/laptop.png" alt="laptop charging" />
              </div>
              <h5 className="mb-2">Quality Code</h5>
              <p className="features-icon-description">
                Code structure that all developers will easily understand and fall in love with.
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 text-center features-icon-box">
              <div className="text-center mb-4">
                <img src="../../assets/img/front-pages/icons/rocket.png" alt="transition up" />
              </div>
              <h5 className="mb-2">Continuous Updates</h5>
              <p className="features-icon-description">
                Free updates for the next 12 months, including new demos and features.
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 text-center features-icon-box">
              <div className="text-center mb-4">
                <img src="../../assets/img/front-pages/icons/paper.png" alt="edit" />
              </div>
              <h5 className="mb-2">Stater-Kit</h5>
              <p className="features-icon-description">
                Start your project quickly without having to remove unnecessary features.
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 text-center features-icon-box">
              <div className="text-center mb-4">
                <img src="../../assets/img/front-pages/icons/check.png" alt="3d select solid" />
              </div>
              <h5 className="mb-2">API Ready</h5>
              <p className="features-icon-description">
                Just change the endpoint and see your own data loaded within seconds.
              </p>
            </div>
            <div className="col-lg-4 col-sm-6 text-center features-icon-box">
              <div className="text-center mb-4">
                <img src="../../assets/img/front-pages/icons/user.png" alt="lifebelt" />
              </div>
              <h5 className="mb-2">Excellent Support</h5>
              <p className="features-icon-description">An easy-to-follow doc with lots of references and code examples.</p>
            </div>
            <div className="col-lg-4 col-sm-6 text-center features-icon-box">
              <div className="text-center mb-4">
                <img src="../../assets/img/front-pages/icons/keyboard.png" alt="google docs" />
              </div>
              <h5 className="mb-2">Well Documented</h5>
              <p className="features-icon-description">An easy-to-follow doc with lots of references and code examples.</p>
            </div>
          </div>
        </div>
      </section>
        </div>
        <section id="landingTeam" class="section-py landing-team">
        <div class="container">
          <div class="text-center mb-4">
            <span class="badge bg-label-primary">Our Great Team</span>
          </div>
          <h4 class="text-center mb-1">
            <span class="position-relative fw-extrabold z-1"
              >Supported
              <img
                src="../../assets/img/front-pages/icons/section-title-icon.png"
                alt="laptop charging"
                class="section-title-img position-absolute object-fit-contain bottom-0 z-n1" />
            </span>
            by Real People
          </h4>
          <p class="text-center mb-md-11 pb-0 pb-xl-12">Who is behind these great-looking interfaces?</p>
          <div class="row gy-12 mt-2">
            <div class="col-lg-3 col-sm-6">
              <div class="card mt-3 mt-lg-0 shadow-none">
                <div
                  class="bg-label-primary border border-bottom-0 border-label-primary position-relative team-image-box">
                  <img
                    src="../../assets/img/front-pages/landing-page/team-member-1.png"
                    class="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl"
                    alt="human image" />
                </div>
                <div class="card-body border border-top-0 border-label-primary text-center">
                  <h5 class="card-title mb-0">Sophie Gilbert</h5>
                  <p class="text-muted mb-0">Project Manager</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card mt-3 mt-lg-0 shadow-none">
                <div class="bg-label-info border border-bottom-0 border-label-info position-relative team-image-box">
                  <img
                    src="../../assets/img/front-pages/landing-page/KarouiB.png"
                    class="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl"
                    alt="human image" />
                </div>
                <div class="card-body border border-top-0 border-label-info text-center">
                  <h5 class="card-title mb-0">Amine Karoui</h5>
                  <p class="text-muted mb-0">Software engineer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card mt-3 mt-lg-0 shadow-none">
                <div
                  class="bg-label-danger border border-bottom-0 border-label-danger position-relative team-image-box">
                  <img
                    src="../../assets/img/front-pages/landing-page/sinab.png"
                    class="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl"
                    alt="human image" />
                </div>
                <div class="card-body border border-top-0 border-label-danger text-center">
                  <h5 class="card-title mb-0">Sina  NAMAKIARAGHI</h5>
                  <p class="text-muted mb-0">Development Lead</p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6">
              <div class="card mt-3 mt-lg-0 shadow-none">
                <div
                  class="bg-label-success border border-bottom-0 border-label-success position-relative team-image-box">
                  <img
                    src="../../assets/img/front-pages/landing-page/nasroB.png"
                    class="position-absolute card-img-position bottom-0 start-50 scaleX-n1-rtl"
                    alt="human image" />
                </div>
                <div class="card-body border border-top-0 border-label-success text-center">
                  <h5 class="card-title mb-0">Naseddine Bouchemel</h5>
                  <p class="text-muted mb-0">Software engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <footer className="landing-footer bg-body footer-text">
      <div className="footer-top position-relative overflow-hidden z-1">
        <img
          src="../../assets/img/front-pages/backgrounds/footer-bg-light.png"
          alt="footer bg"
          className="footer-bg banner-bg-img z-n1"
          data-app-light-img="front-pages/backgrounds/footer-bg-light.png"
          data-app-dark-img="front-pages/backgrounds/footer-bg-dark.png" />
        <div className="container">
          <div className="row gx-0 gy-6 g-lg-10">
            <div className="col-lg-5">
              <a href="landing-page.html" className="app-brand-link mb-6">
                <span className="app-brand-logo demo">
                  <svg width="32" height="22" viewBox="0 0 32 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                      fill="#7367F0" />
                    <path
                      opacity="0.06"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                      fill="#161616" />
                    <path
                      opacity="0.06"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                      fill="#161616" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                      fill="#7367F0" />
                  </svg>
                </span>
                <span className="app-brand-text demo footer-link fw-bold ms-2 ps-1">Vuexy</span>
              </a>
              <p className="footer-text footer-logo-description mb-6">
                Most developer friendly & highly customisable Admin Dashboard Template.
              </p>
              <form className="footer-form">
                <label for="footer-email" className="small">Subscribe to newsletter</label>
                <div className="d-flex mt-1">
                  <input
                    type="email"
                    className="form-control rounded-0 rounded-start-bottom rounded-start-top"
                    id="footer-email"
                    placeholder="Your email" />
                  <button
                    type="submit"
                    className="btn btn-primary shadow-none rounded-0 rounded-end-bottom rounded-end-top">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <h6 className="footer-title mb-6">Demos</h6>
              <ul className="list-unstyled">
                <li className="mb-4">
                  <a href="../vertical-menu-template/" target="_blank" className="footer-link">Vertical Layout</a>
                </li>
                <li className="mb-4">
                  <a href="../horizontal-menu-template/" target="_blank" className="footer-link">Horizontal Layout</a>
                </li>
                <li className="mb-4">
                  <a href="../vertical-menu-template-bordered/" target="_blank" className="footer-link">Bordered Layout</a>
                </li>
                <li className="mb-4">
                  <a href="../vertical-menu-template-semi-dark/" target="_blank" className="footer-link"
                    >Semi Dark Layout</a
                  >
                </li>
                <li className="mb-4">
                  <a href="../vertical-menu-template-dark/" target="_blank" className="footer-link">Dark Layout</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6">
              <h6 className="footer-title mb-6">Pages</h6>
              <ul className="list-unstyled">
                <li className="mb-4">
                  <a href="pricing-page.html" className="footer-link">Pricing</a>
                </li>
                <li className="mb-4">
                  <a href="payment-page.html" className="footer-link"
                    >Payment<span className="badge bg-primary ms-2">New</span></a
                  >
                </li>
                <li className="mb-4">
                  <a href="checkout-page.html" className="footer-link">Checkout</a>
                </li>
                <li className="mb-4">
                  <a href="help-center-landing.html" className="footer-link">Help Center</a>
                </li>
                <li className="mb-4">
                  <a href="../vertical-menu-template/auth-login-cover.html" target="_blank" className="footer-link"
                    >Login/Register</a
                  >
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4">
              <h6 className="footer-title mb-6">Download our app</h6>
              <a href="javascript:void(0);" className="d-block mb-4"
                ><img src="../../assets/img/front-pages/landing-page/apple-icon.png" alt="apple icon"
              /></a>
              <a href="javascript:void(0);" className="d-block"
                ><img src="../../assets/img/front-pages/landing-page/google-play-icon.png" alt="google play icon"
              /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom py-3 py-md-5">
        <div
          className="container d-flex flex-wrap justify-content-between flex-md-row flex-column text-center text-md-start">
          <div className="mb-2 mb-md-0">
            <span className="footer-bottom-text"
              >©
            </span>
            <a href="https://pixinvent.com" target="_blank" className="fw-medium text-white text-white">Pixinvent,</a>
            <span className="footer-bottom-text"> Made with ❤️ for a better web.</span>
          </div>
          <div>
            <a href="https://github.com/pixinvent" className="me-3" target="_blank">
              <img src="../../assets/img/front-pages/icons/github.svg" alt="github icon" />
            </a>
            <a href="https://www.facebook.com/pixinvents/" className="me-3" target="_blank">
              <img src="../../assets/img/front-pages/icons/facebook.svg" alt="facebook icon" />
            </a>
            <a href="https://twitter.com/pixinvents" className="me-3" target="_blank">
              <img src="../../assets/img/front-pages/icons/twitter.svg" alt="twitter icon" />
            </a>
            <a href="https://www.instagram.com/pixinvents/" target="_blank">
              <img src="../../assets/img/front-pages/icons/instagram.svg" alt="google icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
        </>
  );
};

export default LandingPage;
