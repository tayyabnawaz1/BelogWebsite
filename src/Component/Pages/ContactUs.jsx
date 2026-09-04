import React from "react";
import { Link } from "react-router-dom";
import contactus from "../images/contactus.jpg";
const ContactUs = () => {
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
                  <Link className="nav-link" to="/aboutus">
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
                    className="nav-link active"
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
        <img src={contactus} alt="Contact Us" height="200" />
      </div>
      {/* Form  */}
      <div className="container">
        <form class="row g-3 text-start text-bg-secondary pb-3 mx-1 mt-4 rounded-3 shadow">
          <div class="col-md-6">
            <label for="firstname" class="form-label">
              First Name
            </label>
            <input type="text" class="form-control" id="firstname" />
          </div>
          <div class="col-md-6">
            <label for="lastname" class="form-label">
              Last Name
            </label>
            <input type="text" class="form-control" id="lastname" />
          </div>

          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input type="email" class="form-control" id="inputEmail4" />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input type="password" class="form-control" id="inputPassword4" />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              City
            </label>
            <input type="text" class="form-control" id="inputCity" />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              State
            </label>
            <select id="inputState" class="form-select">
              <option selected>Sindh</option>
              <option>Blochistan</option>
              <option>KPK</option>
              <option>Pujnab</option>
            </select>
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Zip
            </label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
          <div class="col-12">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Accept Terms & Conditions
              </label>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Your Message Here
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
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

export default ContactUs;
