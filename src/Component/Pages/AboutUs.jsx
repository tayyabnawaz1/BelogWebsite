import React from "react";
import { Link } from "react-router-dom";
import aboutus from "../images/aboutus.jpg";
import aboutus1 from "../images/about1.jpg";
import aboutus2 from "../images/about2.jpg";
import aboutus3 from "../images/about3.jpg";
const AboutUs = () => {
  return (
    <div>
      {/* Navbar  */}
      <div>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <a className="navbar-brand " href="#">
              GFXinn
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link  " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/aboutus">
                    About Us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle "
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Blogs
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Digital Marketing
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Web Development
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Graphic Designing
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link  "
                    aria-disabled="true"
                    to="/contactus"
                  >
                    {" "}
                    Contact Us
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-primary" type="submit">
                  Search
                </button>
              </form>
              <div className="mx-2">
                <button
                  type="button"
                  className="btn btn-primary "
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Login
                </button>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Signup
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div>
        <img src={aboutus} alt="About Us" height="200" />
      </div>
      {/* Hero section 1 */}
      <div className="container">
        <div class="row flex-lg-row-reverse align-items-center text-start g-5 ms-3  py-5">
          {" "}
          <div class="col-10 col-sm-8 col-lg-6">
            {" "}
            <img
              src={aboutus1}
              class="d-block mx-lg-auto img-fluid  p-2 shadow"
              alt="Bootstrap Themes"
              width="400"
              height="400"
              loading="lazy"
            />{" "}
          </div>{" "}
          <div class="col-lg-6">
            {" "}
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Digital Markiting Services
            </h1>{" "}
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>{" "}
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              {" "}
              <button
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2"
                fdprocessedid="7ai91"
              >
                Primary
              </button>{" "}
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
                fdprocessedid="wekeav"
              >
                Default
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      {/* Hero section 2 */}
      <div className="container">
        <hr />
        <div class="row flex-lg-row-reverse align-items-center text-start me-3 g-5 py-5">
          {" "}
          <div class="col-10 col-sm-8 col-lg-6 order-md-2">
            {" "}
            <img
              src={aboutus2}
              class="d-block mx-lg-auto img-fluid shadow p-2 "
              alt="Bootstrap Themes"
              width="400"
              height="400"
              loading="lazy"
            />{" "}
          </div>{" "}
          <div class="col-lg-6">
            {" "}
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Content Writting and Blogging Services
            </h1>{" "}
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>{" "}
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              {" "}
              <button
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2"
                fdprocessedid="7ai91"
              >
                Primary
              </button>{" "}
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
                fdprocessedid="wekeav"
              >
                Default
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      {/* Hero section 3 */}
      <div className="container">
        <hr />
        <div class="row flex-lg-row-reverse align-items-center text-start g-5 ms-3 py-5">
          {" "}
          <div class="col-10 col-sm-8 col-lg-6">
            {" "}
            <img
              src={aboutus3}
              class="d-block mx-lg-auto img-fluid  p-2 shadow"
              alt="Bootstrap Themes"
              width="400"
              height="400"
              loading="lazy"
            />{" "}
          </div>{" "}
          <div class="col-lg-6">
            {" "}
            <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Graphic Designing Services
            </h1>{" "}
            <p class="lead">
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>{" "}
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              {" "}
              <button
                type="button"
                class="btn btn-primary btn-lg px-4 me-md-2"
                fdprocessedid="7ai91"
              >
                Primary
              </button>{" "}
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
                fdprocessedid="wekeav"
              >
                Default
              </button>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      {/* Fotter  */}
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-secondary-subtle">
          {" "}
          <div className="col-md-4 d-flex align-items-center">
            {" "}
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
              aria-label="Bootstrap"
            >
              {" "}
              <i className="fa-solid fa-snowflake fs-3 text ps-3"></i>
              {/* <svg className="bi" width="30" height="24" aria-hidden="true">
                <use xlink:href="#bootstrap"></use>
              </svg>{" "} */}
            </a>{" "}
            <span className="mb-3 mb-md-0 text-body-secondary fs-5 text">
              Copyrights: GFXinn.com 2026
            </span>{" "}
          </div>{" "}
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            {" "}
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="http://www.youtube.com/@SultanAhmedAli"
                aria-label="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram fs-4 text"></i>
              </a>
            </li>{" "}
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="http://www.youtube.com/@SultanAhmedAli"
                aria-label="facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-square-facebook fs-4 text"></i>
              </a>
            </li>{" "}
            <li className="ms-3">
              <a
                className="text-body-secondary"
                href="http://www.youtube.com/@SultanAhmedAli"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube pe-3 fs-4"></i>
              </a>
            </li>
          </ul>{" "}
        </footer>
      </div>
      
    </div>
  );
};

export default AboutUs;
