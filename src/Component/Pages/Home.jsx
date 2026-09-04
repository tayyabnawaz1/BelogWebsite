import React from "react";
import { Link } from "react-router-dom";
import web_jpg from "../images/1.jpg";
import digit_jpg from "../images/2.jpg";
import ai_jpg from "../images/3.jpg";
import grap_jpg from "../images/4.jpg";
import ai from "../images/ai.jpg";
import appdev from "../images/appdev.jpg";
import vedit from "../images/vedit.jpg";
import dm from "../images/dm.jpg";

const Home = () => {
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
                  <Link
                    className="nav-link active "
                    aria-current="page"
                    href="#"
                  >
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
      {/* Login Form */}
      <div
        className="modal fade"
        id="loginModal"
        tabIndex="-1"
        aria-labelledby="loginModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="loginModalLabel">
                Login to GFXinn
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {/* <!-- Login Form --> */}
              <form>
                <div className="row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-2 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-2 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword3"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Signup form  */}
      <div
        className="modal fade"
        id="signupModal"
        tabindex="-1"
        aria-labelledby="signupModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="signupModalLabel">
                Signup to GFXinn
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* Signup form  */}
            <div className="modal-body">
              <h4 className="text-start d-block">Register to GFXinn</h4>
              <form>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput"
                    className="form-label text-start d-block"
                  >
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Your Full Name"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label text-start d-block"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput"
                    className="form-label text-start d-block"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="formGroupExampleInput2"
                    className="form-label text-start d-block"
                  >
                    Mobile No
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="formGroupExampleInput2"
                    placeholder="Enter Your Mobile No"
                  />
                </div>
                <label
                  htmlFor="formGroupExampleInput2"
                  className="form-label text-start d-block"
                >
                  Your City
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>Select Your City</option>
                  <option value="1">Lahore</option>
                  <option value="2">Karachi</option>
                  <option value="3">Sahiwal</option>
                  <option value="3">Peshawar</option>
                  <option value="3">Islamabad</option>
                  <option value="3">Multan</option>
                </select>
                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="checkDefault"
                    checked
                  />
                  <label
                    className="form-check-label text-start d-block"
                    htmlFor="checkDefault"
                  >
                    Read Terms & Conditions
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                sign Up
              </button>
              <button type="button" className="btn btn-primary">
                {" "}
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* carousel */}
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner carousel slide carousel-fade">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={web_jpg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Web Development</h3>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <button type="button" className="btn btn-primary">
                Read More!
              </button>
              <button type="button" className="btn btn-warning">
                Visit Blog
              </button>
              <button type="button" className="btn btn-danger">
                Rate Us
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={ai_jpg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-dark">Artificial Intelligence</h3>
              <p className="text-dark">
                Some representative placeholder content for the first slide.
              </p>
              <button type="button" className="btn btn-primary">
                Read More!
              </button>
              <button type="button" className="btn btn-warning">
                Visit Blog
              </button>
              <button type="button" className="btn btn-danger">
                Rate Us
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={grap_jpg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Graphing Designing</h3>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <button type="button" className="btn btn-primary">
                Read More!
              </button>
              <button type="button" className="btn btn-warning">
                Visit Blog
              </button>
              <button type="button" className="btn btn-danger">
                Rate Us
              </button>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={digit_jpg} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h3>Digital Markiting</h3>
              <p>
                Some representative placeholder content for the first slide.
              </p>
              <button type="button" className="btn btn-primary">
                Read More!
              </button>
              <button type="button" className="btn btn-warning">
                Visit Blog
              </button>
              <button type="button" className="btn btn-danger">
                Rate Us
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Blog 1 */}
      <div className="container my-3">
        <div class="row mb-2">
          {" "}
          <div class="col-md-6">
            {" "}
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              {" "}
              <div class="col p-4 d-flex flex-column position-static">
                {" "}
                <strong class="d-inline-block mb-2 text-primary-emphasis text-start">
                  AI World
                </strong>{" "}
                <h3 class="mb-0 text-start">Artificial Intelligence</h3>{" "}
                <div class="mb-1 text-body-secondary text-start">
                  Aug 31, 2026
                </div>{" "}
                <p class="card-text mb-auto text-start">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>{" "}
                <a
                  href="#"
                  class="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Continue reading
                  <svg class="bi" aria-hidden="true">
                    <use xlinkHref="#chevron-right"></use>
                  </svg>{" "}
                </a>{" "}
              </div>{" "}
              <div class="col-auto d-none d-lg-block">
                {" "}
                <img src={ai} alt="" height="250" width="200" />
                {/* <svg
                aria-label="Placeholder: Thumbnail"
                class="bd-placeholder-img "
                height="250"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>{" "} */}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div class="col-md-6">
            {" "}
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              {" "}
              <div class="col p-4 d-flex flex-column position-static">
                {" "}
                <strong class="d-inline-block mb-2 text-success-emphasis text-start">
                  App Design
                </strong>{" "}
                <h3 class="mb-0 text-start">Flutter</h3>{" "}
                <div class="mb-1 text-body-secondary text-start">
                  Aug 31, 2026
                </div>{" "}
                <p class="mb-auto text-start">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>{" "}
                <a
                  href="#"
                  class="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Continue reading
                  <svg class="bi" aria-hidden="true">
                    <use xlinkHref="#chevron-right"></use>
                  </svg>{" "}
                </a>{" "}
              </div>{" "}
              <div class="col-auto d-none d-lg-block">
                {" "}
                <img src={appdev} alt="" height="250" width="200" />
                {/* <svg
                aria-label="Placeholder: Thumbnail"
                class="bd-placeholder-img "
                height="250"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>{" "} */}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>

      {/* Blog 2 */}
      <div className="container my-3">
        <div class="row mb-2">
          {" "}
          <div class="col-md-6">
            {" "}
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              {" "}
              <div class="col p-4 d-flex flex-column position-static">
                {" "}
                <strong class="d-inline-block mb-2 text-primary-emphasis text-start">
                  Social Media
                </strong>{" "}
                <h3 class="mb-0 text-start">Digital Markiting</h3>{" "}
                <div class="mb-1 text-body-secondary text-start">
                  Aug 31, 2026
                </div>{" "}
                <p class="card-text mb-auto text-start">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>{" "}
                <a
                  href="#"
                  class="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Continue reading
                  <svg class="bi" aria-hidden="true">
                    <use xlinkHref="#chevron-right"></use>
                  </svg>{" "}
                </a>{" "}
              </div>{" "}
              <div class="col-auto d-none d-lg-block">
                {" "}
                <img src={dm} alt="" height="250" width="200" />
                {/* <svg
                aria-label="Placeholder: Thumbnail"
                class="bd-placeholder-img "
                height="250"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>{" "} */}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div class="col-md-6">
            {" "}
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              {" "}
              <div class="col p-4 d-flex flex-column position-static">
                {" "}
                <strong class="d-inline-block mb-2 text-success-emphasis text-start">
                  Learn
                </strong>{" "}
                <h3 class="mb-0 text-start">Vedio Editing</h3>{" "}
                <div class="mb-1 text-body-secondary text-start">
                  Aug 31, 2026
                </div>{" "}
                <p class="mb-auto text-start">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>{" "}
                <a
                  href="#"
                  class="icon-link gap-1 icon-link-hover stretched-link"
                >
                  Continue reading
                  <svg class="bi" aria-hidden="true">
                    <use xlinkHref="#chevron-right"></use>
                  </svg>{" "}
                </a>{" "}
              </div>{" "}
              <div class="col-auto d-none d-lg-block">
                {" "}
                <img src={vedit} alt="" height="250" width="200" />
                {/* <svg
                aria-label="Placeholder: Thumbnail"
                class="bd-placeholder-img "
                height="250"
                preserveAspectRatio="xMidYMid slice"
                role="img"
                width="200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c"></rect>
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>{" "} */}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      {/* Body of home page */}
      <div className="container">
        <div class="container text-start py-4">
          <hr />{" "}
          <header class="pb-3 mb-4 border-bottom">
            {" "}
            <a
              href="/"
              class="d-flex align-items-center text-body-emphasis text-decoration-none"
            >
              {" "}
              <span class="fs-4">Top Trends</span>{" "}
            </a>{" "}
          </header>{" "}
          <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            {" "}
            <div class="container-fluid py-5">
              {" "}
              <h1 class="display-5 fw-bold">Freelancing Skills</h1>{" "}
              <p class="col-md-8 fs-4">
                Using a series of utilities, you can create this jumbotron, just
                like the one in previous versions of Bootstrap. Check out the
                examples below for how you can remix and restyle it to your
                liking.
              </p>{" "}
              <button class="btn btn-primary btn-lg " type="button">
                Read More
              </button>{" "}
            </div>{" "}
          </div>{" "}
          <div class="row align-items-md-stretch">
            {" "}
            <div class="col-md-6">
              {" "}
              <div class="h-100 p-5 text-bg-dark rounded-3 text-start">
                {" "}
                <h2>Atificial Intelligence</h2>{" "}
                <p>
                  Swap the background-color utility and add a `.text-*` color
                  utility to mix up the jumbotron look. Then, mix and match with
                  additional component themes and more.
                </p>{" "}
                <button class="btn btn-outline-light" type="button">
                  Get Registerd
                </button>{" "}
              </div>{" "}
            </div>{" "}
            <div class="col-md-6">
              {" "}
              <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                {" "}
                <h2 text-start>High Income Skills</h2>{" "}
                <p>
                  Or, keep it light and add a border for some added definition
                  to the boundaries of your content. Be sure to look under the
                  hood at the source HTML here as we've adjusted the alignment
                  and sizing of both column's content for equal-height.
                </p>{" "}
                <button class="btn btn-outline-secondary" type="button">
                  Get Idea
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <footer class="pt-3 mt-4 text-body-secondary border-top">
            © 2026{" "}
          </footer>{" "}
        </div>
      </div>
      {/* Heros section  */}
      <div className="container">
        <div class="row align-items-center g-lg-5 py-5 text-start  ">
          {" "}
          <div class="row align-items-center g-lg-5 py-5">
            {" "}
            <div class="col-lg-7 text-center text-lg-start">
              {" "}
              <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">
                Get Registerd with us sign-up form
              </h1>{" "}
              <p class="col-lg-10 fs-4">
                Below is an example form built entirely with Bootstrap’s form
                controls. Each required form group has a validation state that
                can be triggered by attempting to submit the form without
                completing it.
              </p>{" "}
            </div>{" "}
            <div class="col-md-10 mx-auto col-lg-5">
              {" "}
              <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary">
                {" "}
                <div class="form-floating mb-3">
                  {" "}
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                    fdprocessedid="auuhn6"
                  />{" "}
                  <label for="floatingInput">Email address</label>{" "}
                </div>{" "}
                <div class="form-floating mb-3">
                  {" "}
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    fdprocessedid="1283c"
                  />{" "}
                  <label for="floatingPassword">Password</label>{" "}
                </div>{" "}
                <div class="checkbox mb-3">
                  {" "}
                  <label>
                    {" "}
                    <input type="checkbox" value="remember-me" /> Remember me
                  </label>{" "}
                </div>{" "}
                <button
                  class="w-100 btn btn-lg btn-primary"
                  type="submit"
                  fdprocessedid="qwyvze"
                >
                  Sign up
                </button>{" "}
                <hr class="my-4" />{" "}
                <small class="text-body-secondary">
                  By clicking Sign up, you agree to the terms of use.
                </small>{" "}
              </form>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>
      {/* Dark Box  */}
      <div className="container">
        <div class="bg-dark text-secondary px-4 py-5 text-center">
          {" "}
          <div class="py-5">
            {" "}
            <h1 class="display-5 fw-bold text-white">
              Learn Freelancing Skills
            </h1>{" "}
            <div class="col-lg-6 mx-auto">
              {" "}
              <p class="fs-5 mb-4">
                Quickly design and customize responsive mobile-first sites with
                Bootstrap, the world’s most popular front-end open source
                toolkit, featuring Sass variables and mixins, responsive grid
                system, extensive prebuilt components, and powerful JavaScript
                plugins.
              </p>{" "}
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                {" "}
                <button
                  type="button"
                  class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
                  fdprocessedid="bhgjbt"
                >
                  Get Registerd
                </button>{" "}
                <button
                  type="button"
                  class="btn btn-outline-light btn-lg px-4"
                  fdprocessedid="m2142l"
                >
                  Read More
                </button>{" "}
              </div>{" "}
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

export default Home;
