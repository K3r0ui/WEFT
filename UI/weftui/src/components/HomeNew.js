import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "react-oidc-context";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const auth = useAuth();

  const toggleMenu = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  const [isLayoutsOpen, setIsLayoutsOpen] = useState(false);
  const toggleLayout = (e) => {
    e.preventDefault();
    setIsLayoutsOpen(!isLayoutsOpen);
  };

  // Navbar profile dropdown
  const [isProfileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Function to toggle profile dropdown
  const toggleProfileDropdown = () => {
    setProfileOpen(!isProfileOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Layout Wrapper */}
      <div className="layout-wrapper layout-content-navbar">
        {/* Layout Container */}
        <div className="layout-container">
          {/* Sidebar */}
          <aside
            id="layout-menu"
            className="layout-menu menu-vertical menu bg-menu-theme"
            style={{ width: "250px", minHeight: "100vh" }}
          >
            <div className="app-brand demo">
              <a href="index.html" className="app-brand-link">
                <svg
                  width="32"
                  height="22"
                  viewBox="0 0 32 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.00172773 0V6.85398C0.00172773 6.85398 -0.133178 9.01207 1.98092 10.8388L13.6912 21.9964L19.7809 21.9181L18.8042 9.88248L16.4951 7.17289L9.23799 0H0.00172773Z"
                    fill="#7367F0"
                  />
                  <path
                    opacity="0.06"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.69824 16.4364L12.5199 3.23696L16.5541 7.25596L7.69824 16.4364Z"
                    fill="#161616"
                  />
                  <path
                    opacity="0.06"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.07751 15.9175L13.9419 4.63989L16.5849 7.28475L8.07751 15.9175Z"
                    fill="#161616"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.77295 16.3566L23.6563 0H32V6.88383C32 6.88383 31.8262 9.17836 30.6591 10.4057L19.7824 22H13.6938L7.77295 16.3566Z"
                    fill="#7367F0"
                  />
                </svg>
                <span className="app-brand-logo demo"></span>
              </a>
            </div>

            <div className="menu-inner-shadow"></div>

            <ul className="menu-inner py-1">
              {/* Dashboards Menu */}
              <li className={`menu-item ${isOpen ? "active" : ""}`}>
                <a
                  href="#"
                  className="menu-link menu-toggle"
                  onClick={toggleMenu}
                >
                  <i className="menu-icon tf-icons ti ti-smart-home"></i>
                  <div data-i18n="Dashboards">Dashboards</div>
                  <div className="badge bg-danger rounded-pill ms-auto">5</div>
                </a>

                {/* Submenu */}
                <ul
                  className="menu-sub"
                  style={{ display: isOpen ? "block" : "none" }}
                >
                  <li className="menu-item active">
                    <a
                      href="app-ecommerce-dashboard.html"
                      className="menu-link"
                    >
                      <div data-i18n="eCommerce">eCommerce</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="app-logistics-dashboard.html"
                      className="menu-link"
                    >
                      <div data-i18n="Logistics">Logistics</div>
                    </a>
                  </li>
                </ul>
              </li>

              {/* Layouts Menu */}
              <li className="menu-item">
                <a
                  href="#"
                  className="menu-link menu-toggle"
                  onClick={toggleLayout}
                >
                  <i className="menu-icon tf-icons ti ti-layout-sidebar"></i>
                  <div data-i18n="Layouts">Layouts</div>
                </a>

                <ul
                  className="menu-sub"
                  style={{ display: isLayoutsOpen ? "block" : "none" }}
                >
                  <li className="menu-item">
                    <a
                      href="layouts-collapsed-menu.html"
                      className="menu-link"
                    >
                      <div data-i18n="Collapsed menu">Collapsed menu</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a
                      href="layouts-content-navbar.html"
                      className="menu-link"
                    >
                      <div data-i18n="Content navbar">Content navbar</div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </aside>

          {/* Layout Page */}
          <div className="layout-page">
            {/* Navbar */}
            <nav className="navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme">
              <div className="container-xxl">
                <div className="navbar-nav-right d-flex align-items-center w-100">
                  {/* Right Side Options */}
                  <ul className="navbar-nav flex-row align-items-center ms-auto">
                    {/* User Profile */}
                    <li className="nav-item dropdown" ref={profileRef}>
                      <button
                        className="nav-link p-0 border-0 bg-transparent"
                        onClick={toggleProfileDropdown}
                      >
                        <div className="avatar avatar-online">
                          <img
                            src="../../assets/img/avatars/1.png"
                            alt="User Avatar"
                            className="rounded-circle"
                          />
                        </div>
                      </button>

                      {/* Profile Dropdown Menu */}
                      {isProfileOpen && (
                        <ul className="dropdown-menu dropdown-menu-end show">
                          <li>
                            <a
                              className="dropdown-item mt-0"
                              href="/account-settings"
                            >
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-2">
                                  <div className="avatar avatar-online">
                                    <img
                                      src="../../assets/img/avatars/1.png"
                                      alt="User Avatar"
                                      className="rounded-circle"
                                    />
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h6 className="mb-0">John Doe</h6>
                                  <small className="text-muted">Admin</small>
                                </div>
                              </div>
                            </a>
                          </li>
                          <li>
                            <div className="dropdown-divider my-1 mx-n2"></div>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/profile">
                              My Profile
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="/settings">
                              Settings
                            </a>
                          </li>
                          <li>
                            <div className="d-grid px-2 pt-2 pb-1">
                              <a
                                className="btn btn-sm btn-danger d-flex"
                                onClick={() => auth.signoutRedirect()}
                              >
                                <small className="align-middle">Logout</small>
                                <i className="ti ti-logout ms-2 ti-14px"></i>
                              </a>
                            </div>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <main className="content-wrapper" style={{ marginLeft: "250px" }}>
              <div className="container-xxl flex-grow-1 container-p-y">
                <h1>Main Content</h1>
                <p>This is the main content area.</p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;