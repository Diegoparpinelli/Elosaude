import React, { useEffect, useState } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

import api from "./../url/url";
import { RxExit } from "react-icons/rx";
import { HiOutlineCog8Tooth } from "react-icons/hi2";

import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";

import logoElo10 from "/src/assets/elo-imgs/Logotipo_EloSaúde_SemFundo-10.png";
import logoElo3 from "/src/assets/elo-imgs/Logotipo_EloSaúde_SemFundo-03.png";

function HeaderDash(props) {
  const [userID, setUserID] = useState(0);
  const [userName, setUserName] = useState("");

  function apagarCache() {
    sessionStorage.clear();
  }

  const quickBarReset = () => {
    $(".ms-quick-bar").removeClass("ms-quick-bar-open");
    $(".ms-quick-bar-item > a").removeClass("active show");
    $(".ms-quick-bar-item > a").attr("aria-selected", "false");
    $(".ms-quick-bar > .tab-content .tab-pane").removeClass("active show");
  };

  /* Custom Toggle Actions */
  const customToggleActions = (e) => {
    var target = $(e.target).data("bs-target");
    var toggleType = $(e.target).data("bs-toggle");

    switch (toggleType) {
      //Aside Left
      case "slideLeft":
        $(target).toggleClass("ms-aside-open");
        $(".ms-aside-overlay.ms-overlay-left").toggleClass("d-block");
        $("section").toggleClass("ms-aside-left-open");
        break;
      // Aside Right
      case "slideRight":
        $(target).toggleClass("ms-aside-open");
        $(".ms-aside-overlay.ms-overlay-right").toggleClass("d-block");
        break;
      // Navbar Slide do
      case "slideDown":
        $(target).toggleClass("ms-slide-down");
        break;
      case "hideQuickBar":
        quickBarReset();
        break;
      default:
        return;
    }
  };

  const setActiveMenuItem = (e) => {
    var target = $(e.target).data("bs-target");

    $(target).toggleClass("show");

    $(!target).removeClass("show");
  };

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("key"));
    setUserID(data.userid);
    setUserName(data.username);
  }, []);

  return (
    <section className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
      <div
        className="ms-aside-overlay ms-overlay-left ms-toggler"
        data-bs-target="#ms-side-nav"
        data-bs-toggle="slideLeft"
        onClick={customToggleActions}
      ></div>
      <div
        className="ms-aside-overlay ms-overlay-right ms-toggler"
        data-bs-target="#ms-recent-activity"
        data-bs-toggle="slideRight"
        onClick={customToggleActions}
      ></div>
      <aside
        id="ms-side-nav"
        className="side-nav fixed ms-aside-scrollable ms-aside-left"
      >
        <div className="logo-sn ms-d-block-lg">
          <Link className="ps-0 ms-0 text-center" to="/dashboard">
            {" "}
            <img src={logoElo10} alt="logo" />{" "}
          </Link>
          <a className="text-center ms-logo-img-link">
            {" "}
            <img
              src={`${api.URLAPI}/uploads/doctorImg${userID}.jpg`}
              alt="logo"
            />
          </a>
          <h5 className="text-center text-white mt-2">{}</h5>
          <h6 className="text-center text-white mb-3">{}</h6>
        </div>

        <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
          <li className="menu-item" onClick={setActiveMenuItem}>
            <a
              className="has-chevron"
              data-bs-toggle="collapse"
              data-bs-target="#dashboard"
              aria-expanded="false"
              aria-controls="dashboard"
            >
              <span>
                <i className="material-icons fs-16">dashboard</i>Dashboard{" "}
              </span>
            </a>

            <ul
              id="dashboard"
              className="collapse"
              aria-labelledby="dashboard"
              data-bs-parent="#side-nav-accordion"
            >
              <li>
                <Link to="/dashboard">Eloboard</Link>
              </li>
            </ul>
          </li>

          <li className="menu-item" onClick={setActiveMenuItem}>
            <a
              className="has-chevron"
              data-bs-toggle="collapse"
              data-bs-target="#doctor"
              aria-expanded="false"
              aria-controls="doctor"
            >
              <span onClick={setActiveMenuItem}>
                <i className="fas fa-stethoscope"></i>Médicos
              </span>
            </a>
            <ul
              id="doctor"
              className="collapse"
              aria-labelledby="doctor"
              data-bs-parent="#side-nav-accordion"
            >
              <li>
                <Link to="/dashboard/doctor/add">Adicionar Médico</Link>
              </li>
              <li>
                <Link to="/dashboard/doctor">Lista de Médicos</Link>
              </li>
            </ul>
          </li>

          {/* <li className="menu-item" onClick={setActiveMenuItem}>
            <a className="has-chevron" data-bs-toggle="collapse" data-bs-target="#clinics" aria-expanded="false" aria-controls="doctor">
              <span>
                <i><FaClinicMedical />
                </i>Clínicas</span>
            </a>

            <ul id="clinics" className="collapse" aria-labelledby="doctor" data-bs-parent="#side-nav-accordion">
              <li>
                <Link to='/dashboard/clinic/add'>
                  Adicionar Clínica
                </Link>
              </li>
              <li>
                <Link to='/dashboard/clinic'>Lista de Clínicas</Link>
              </li>
            </ul>
          </li> */}

          <li className="menu-item" onClick={setActiveMenuItem}>
            <a
              className="has-chevron"
              data-bs-toggle="collapse"
              data-bs-target="#patient"
              aria-expanded="false"
              aria-controls="patient"
            >
              <span>
                <i className="fa fa-layer-group"></i>Serviço Referência
              </span>
            </a>

            <ul
              id="patient"
              className="collapse"
              aria-labelledby="patient"
              data-bs-parent="#side-nav-accordion"
            >
              <li>
                <Link to="/dashboard/specialty/add">Adicionar Serviço</Link>
              </li>
              <li>
                <Link to="/dashboard/specialty">Lista de Serviços</Link>
              </li>
            </ul>
          </li>

          <li className="menu-item" onClick={setActiveMenuItem}>
            <a
              className="has-chevron"
              data-bs-toggle="collapse"
              data-bs-target="#department"
              aria-expanded="false"
              aria-controls="department"
            >
              <span>
                <i className="fas fa-sitemap"></i>Departamentos
              </span>
            </a>

            <ul
              id="department"
              className="collapse"
              aria-labelledby="department"
              data-bs-parent="#side-nav-accordion"
            >
              <li>
                <Link to="/dashboard/department/add">
                  Adicionar Departamento
                </Link>
              </li>
              <li>
                <Link to="/dashboard/department">Lista de Departamento</Link>
              </li>
            </ul>
          </li>

          <li className="menu-item" onClick={setActiveMenuItem}>
            <a
              className="has-chevron"
              data-bs-toggle="collapse"
              data-bs-target="#users"
              aria-expanded="false"
              aria-controls="users"
            >
              <span>
                <i className="fas fa-user"></i>Usuários
              </span>
            </a>
            <ul
              id="users"
              className="collapse"
              aria-labelledby="users"
              data-bs-parent="#side-nav-accordion"
            >
              {/* <li>
                <Link to='/dashboard/user/add'>
                  Adicionar Usuário
                </Link>
              </li> */}
              <li>
                <Link to="/dashboard/user">Lista de Usuários</Link>
              </li>
            </ul>
          </li>

          <li className="menu-item" onClick={setActiveMenuItem}>
            <a
              className="has-chevron"
              data-bs-toggle="collapse"
              data-bs-target="#posts"
              aria-expanded="false"
              aria-controls="posts"
            >
              <span>
                <i className="fas fa-folder-plus"></i>Postagens
              </span>
            </a>
            <ul
              id="posts"
              className="collapse"
              aria-labelledby="posts"
              data-bs-parent="#side-nav-accordion"
            >
              {/* <li>
                <Link to='/dashboard/user/add'>
                  Adicionar Usuário
                </Link>
              </li> */}
              <li>
                <Link to={"/dashboard/post"}>Nova Postagem</Link>
              </li>
              <li>
                <Link to={"/dashboard/post/add"}>Postagens Pendentes</Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>

      <section className="body-content">
        <nav className="navbar ms-navbar">
          <div
            className="ms-aside-toggler ms-toggler ps-0"
            data-bs-target="#ms-side-nav"
            data-bs-toggle="slideLeft"
            onClick={customToggleActions}
          >
            <span className="ms-toggler-bar bg-white"></span>
            <span className="ms-toggler-bar bg-white"></span>
            <span className="ms-toggler-bar bg-white"></span>
          </div>
          <div className="docfind-logo d-none d-xl-block"></div>
          <div className="logo-sn logo-sm ms-d-block-sm">
            <Link
              to="/dashboard"
              className="ps-0 ms-0 text-center navbar-brand me-0"
            >
              <img src={logoElo3} alt="logo" />{" "}
            </Link>
          </div>
          <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">
            <li className="ms-nav-item ms-nav-user dropdown">
              <NavDropdown
                title={
                  <span
                    id="userDropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      className="ms-user-img ms-img-round float-end"
                      src={`${api.URLAPI}/uploads/doctorImg${userID}.jpg`}
                      alt="people"
                    />
                  </span>
                }
              >
                <NavDropdown.Item>
                  <h6 className="NavDropdown-header ms-inline m-0">
                    <span className="text-disabled">Bem-Vindo, {userName}</span>
                  </h6>
                </NavDropdown.Item>
                <Dropdown.Divider />
                <NavDropdown.Item>
                  <span className="media fs-14 p-2">
                    {" "}
                    <span>
                      <i className="me-2 w">
                        <HiOutlineCog8Tooth style={{ fontSize: "18px" }} />
                      </i>
                      Configurações
                    </span>{" "}
                  </span>
                </NavDropdown.Item>

                <Dropdown.Divider />

                <NavDropdown.Item href="#/login">
                  <span className="media fs-14 p-2">
                    {/* <Link to="/login" > */}
                    <span onClick={() => apagarCache()}>
                      <i className="me-2">
                        <RxExit style={{ fontSize: "18px" }} />
                      </i>
                      Sair
                    </span>
                    {/* </Link> */}
                  </span>
                </NavDropdown.Item>
              </NavDropdown>
              <ul
                className="dropdown-menu dropdown-menu-end user-dropdown"
                aria-labelledby="userDropdown"
              ></ul>
            </li>
          </ul>
          <div
            className="ms-toggler ms-d-block-sm pe-0 ms-nav-toggler"
            data-bs-toggle="slideDown"
            data-bs-target="#ms-nav-options"
            onClick={customToggleActions}
          >
            <span className="ms-toggler-bar bg-white"></span>
            <span className="ms-toggler-bar bg-white"></span>
            <span className="ms-toggler-bar bg-white"></span>
          </div>
        </nav>
        {props.children}
      </section>
    </section>
  );
}

export default HeaderDash;
