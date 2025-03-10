import React, { useState,useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/footer';
const LandingPage = () => {
 
  return (
    
    <>
      <Navbar></Navbar>
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
          <Footer></Footer>
        </>
  );
};

export default LandingPage;
