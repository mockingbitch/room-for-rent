import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Sidebar from '../../components/common/dashboard/Sidebar'

const DashboardLayout = ({children}) => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <link rel="stylesheet" href='/assets/css/nucleo-icons.css' />
                    <link rel="stylesheet" href='/assets/css/nucleo-svg.css' />
                    <link rel="stylesheet" href='/assets/css/soft-ui-dashboard.css?v=1.0.6' />
                    <link rel="stylesheet" href='/assets/fonts/fonts.css' />
                </Helmet>
            </HelmetProvider>
        <aside
          className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 "
          id="sidenav-main"
        >
          <div className="sidenav-header">
            <i
              className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
              aria-hidden="true"
              id="iconSidenav"
            />
            <a
              className="navbar-brand m-0"
              href=" https://demos.creative-tim.com/soft-ui-dashboard/pages/dashboard.html "

            >
              <img
                src="../assets/img/logo-ct-dark.png"
                className="navbar-brand-img h-100"
                alt="main_logo"
              />
              <span className="ms-1 font-weight-bold">Soft UI Dashboard</span>
            </a>
          </div>
          <hr className="horizontal dark mt-0" />
          <div
            className="collapse navbar-collapse  w-auto "
            id="sidenav-collapse-main"
          >
            <Sidebar />
          </div>
          <div className="sidenav-footer mx-3 ">
            <div
              className="card card-background shadow-none card-background-mask-secondary"
              id="sidenavCard"
            >
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    'url("../assets/img/curved-images/white-curved.jpg")'
                }}
              />
              <div className="card-body text-start p-3 w-100">
                <div className="icon icon-shape icon-sm bg-white shadow text-center mb-3 d-flex align-items-center justify-content-center border-radius-md">
                  <i
                    className="ni ni-diamond text-dark text-gradient text-lg top-0"
                    aria-hidden="true"
                    id="sidenavCardIcon"
                  />
                </div>
                <div className="docs-info">
                  <h6 className="text-white up mb-0">Need help?</h6>
                  <p className="text-xs font-weight-bold">Please check our docs</p>
                  <a
                    href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard"

                    className="btn btn-white btn-sm w-100 mb-0"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </div>
            <a
              className="btn bg-gradient-primary mt-3 w-100"
              href="https://www.creative-tim.com/product/soft-ui-dashboard-pro?ref=sidebarfree"
            >
              Upgrade to pro
            </a>
          </div>
        </aside>
        <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
          {/* Navbar */}
          <nav
            className="navbar navbar-main navbar-expand-lg px-0 mx-4 shadow-none border-radius-xl"
            id="navbarBlur"
            navbar-scroll="true"
          >
            <div className="container-fluid py-1 px-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
                  <li className="breadcrumb-item text-sm">
                    <a className="opacity-5 text-dark" href="javascript:;">
                      Pages
                    </a>
                  </li>
                  <li
                    className="breadcrumb-item text-sm text-dark active"
                    aria-current="page"
                  >
                    Dashboard
                  </li>
                </ol>
                <h6 className="font-weight-bolder mb-0">Dashboard</h6>
              </nav>
              <div
                className="collapse navbar-collapse mt-sm-0 mt-2 me-md-0 me-sm-4"
                id="navbar"
              >
                <div className="ms-md-auto pe-md-3 d-flex align-items-center">
                  <div className="input-group">
                    <span className="input-group-text text-body">
                      <i className="fas fa-search" aria-hidden="true" />
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type here..."
                    />
                  </div>
                </div>
                <ul className="navbar-nav  justify-content-end">
                  <li className="nav-item d-flex align-items-center">
                    <a
                      className="btn btn-outline-primary btn-sm mb-0 me-3"

                      href="https://www.creative-tim.com/builder/soft-ui?ref=navbar-dashboard"
                    >
                      Online Builder
                    </a>
                  </li>
                  <li className="nav-item d-flex align-items-center">
                    <a
                      href="javascript:;"
                      className="nav-link text-body font-weight-bold px-0"
                    >
                      <i className="fa fa-user me-sm-1" />
                      <span className="d-sm-inline d-none">Sign In</span>
                    </a>
                  </li>
                  <li className="nav-item d-xl-none ps-3 d-flex align-items-center">
                    <a
                      href="javascript:;"
                      className="nav-link text-body p-0"
                      id="iconNavbarSidenav"
                    >
                      <div className="sidenav-toggler-inner">
                        <i className="sidenav-toggler-line" />
                        <i className="sidenav-toggler-line" />
                        <i className="sidenav-toggler-line" />
                      </div>
                    </a>
                  </li>
                  <li className="nav-item px-3 d-flex align-items-center">
                    <a href="javascript:;" className="nav-link text-body p-0">
                      <i className="fa fa-cog fixed-plugin-button-nav cursor-pointer" />
                    </a>
                  </li>
                  <li className="nav-item dropdown pe-2 d-flex align-items-center">
                    <a
                      href="javascript:;"
                      className="nav-link text-body p-0"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa fa-bell cursor-pointer" />
                    </a>
                    <ul
                      className="dropdown-menu  dropdown-menu-end  px-2 py-3 me-sm-n4"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li className="mb-2">
                        <a
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img
                                src="../assets/img/team-2.jpg"
                                className="avatar avatar-sm  me-3 "
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">New message</span>{" "}
                                from Laur
                              </h6>
                              <p className="text-xs text-secondary mb-0 ">
                                <i className="fa fa-clock me-1" />
                                13 minutes ago
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li className="mb-2">
                        <a
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          <div className="d-flex py-1">
                            <div className="my-auto">
                              <img
                                src="../assets/img/small-logos/logo-spotify.svg"
                                className="avatar avatar-sm bg-gradient-dark  me-3 "
                              />
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                <span className="font-weight-bold">New album</span> by
                                Travis Scott
                              </h6>
                              <p className="text-xs text-secondary mb-0 ">
                                <i className="fa fa-clock me-1" />1 day
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item border-radius-md"
                          href="javascript:;"
                        >
                          <div className="d-flex py-1">
                            <div className="avatar avatar-sm bg-gradient-secondary  me-3  my-auto">
                              <svg
                                width="12px"
                                height="12px"
                                viewBox="0 0 43 36"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                              >
                                <title>credit-card</title>
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g
                                    transform="translate(-2169.000000, -745.000000)"
                                    fill="#FFFFFF"
                                    fillRule="nonzero"
                                  >
                                    <g transform="translate(1716.000000, 291.000000)">
                                      <g transform="translate(453.000000, 454.000000)">
                                        <path
                                          className="color-background"
                                          d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                          opacity="0.593633743"
                                        />
                                        <path
                                          className="color-background"
                                          d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                        />
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                              <h6 className="text-sm font-weight-normal mb-1">
                                Payment successfully completed
                              </h6>
                              <p className="text-xs text-secondary mb-0 ">
                                <i className="fa fa-clock me-1" />2 days
                              </p>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* End Navbar */}
          {children}
        </main>
        <div className="fixed-plugin">
          <a className="fixed-plugin-button text-dark position-fixed px-3 py-2">
            <i className="fa fa-cog py-2"> </i>
          </a>
          <div className="card shadow-lg ">
            <div className="card-header pb-0 pt-3 ">
              <div className="float-start">
                <h5 className="mt-3 mb-0">Soft UI Configurator</h5>
                <p>See our dashboard options.</p>
              </div>
              <div className="float-end mt-4">
                <button className="btn btn-link text-dark p-0 fixed-plugin-close-button">
                  <i className="fa fa-close" />
                </button>
              </div>
              {/* End Toggle Button */}
            </div>
            <hr className="horizontal dark my-1" />
            <div className="card-body pt-sm-3 pt-0">
              {/* Sidebar Backgrounds */}
              <div>
                <h6 className="mb-0">Sidebar Colors</h6>
              </div>
              <a
                href="javascript:void(0)"
                className="switch-trigger background-color"
              >
                <div className="badge-colors my-2 text-start">
                  <span
                    className="badge filter bg-gradient-primary active"
                    data-color="primary"
                    onclick="sidebarColor(this)"
                  />
                  <span
                    className="badge filter bg-gradient-dark"
                    data-color="dark"
                    onclick="sidebarColor(this)"
                  />
                  <span
                    className="badge filter bg-gradient-info"
                    data-color="info"
                    onclick="sidebarColor(this)"
                  />
                  <span
                    className="badge filter bg-gradient-success"
                    data-color="success"
                    onclick="sidebarColor(this)"
                  />
                  <span
                    className="badge filter bg-gradient-warning"
                    data-color="warning"
                    onclick="sidebarColor(this)"
                  />
                  <span
                    className="badge filter bg-gradient-danger"
                    data-color="danger"
                    onclick="sidebarColor(this)"
                  />
                </div>
              </a>
              {/* Sidenav Type */}
              <div className="mt-3">
                <h6 className="mb-0">Sidenav Type</h6>
                <p className="text-sm">Choose between 2 different sidenav types.</p>
              </div>
              <div className="d-flex">
                <button
                  className="btn bg-gradient-primary w-100 px-3 mb-2 active"
                  data-class="bg-transparent"
                  onclick="sidebarType(this)"
                >
                  Transparent
                </button>
                <button
                  className="btn bg-gradient-primary w-100 px-3 mb-2 ms-2"
                  data-class="bg-white"
                  onclick="sidebarType(this)"
                >
                  White
                </button>
              </div>
              <p className="text-sm d-xl-none d-block mt-2">
                You can change the sidenav type just on desktop view.
              </p>
              {/* Navbar Fixed */}
              <div className="mt-3">
                <h6 className="mb-0">Navbar Fixed</h6>
              </div>
              <div className="form-check form-switch ps-0">
                <input
                  className="form-check-input mt-1 ms-auto"
                  type="checkbox"
                  id="navbarFixed"
                  onclick="navbarFixed(this)"
                />
              </div>
              <hr className="horizontal dark my-sm-4" />
              <a
                className="btn bg-gradient-dark w-100"
                href="https://www.creative-tim.com/product/soft-ui-dashboard"
              >
                Free Download
              </a>
              <a
                className="btn btn-outline-dark w-100"
                href="https://www.creative-tim.com/learning-lab/bootstrap/license/soft-ui-dashboard"
              >
                View documentation
              </a>
              <div className="w-100 text-center">
                <a
                  className="github-button"
                  href="https://github.com/creativetimofficial/soft-ui-dashboard"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star creativetimofficial/soft-ui-dashboard on GitHub"
                >
                  Star
                </a>
                <h6 className="mt-3">Thank you for sharing!</h6>
                <a
                  href="https://twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23bootstrap5&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard"
                  className="btn btn-dark mb-0 me-2"

                >
                  <i className="fab fa-twitter me-1" aria-hidden="true" /> Tweet
                </a>
                <a
                  href="https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard"
                  className="btn btn-dark mb-0 me-2"

                >
                  <i className="fab fa-facebook-square me-1" aria-hidden="true" />{" "}
                  Share
                </a>
              </div>
            </div>
          </div>
        </div>
        <HelmetProvider>
          <Helmet>
            <script src="/assets/js/plugins/chartjs.min.js"></script>
          </Helmet>
        </HelmetProvider>
      </>
    )
}

export default DashboardLayout