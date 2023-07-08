import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logoHeader from "/src/assets/elo-imgs/Logotipo_EloSaúde_SemFundo-01.png";
import logoElo3 from "/src/assets/elo-imgs/Logotipo_EloSaúde_SemFundo-03.png";
import logoElo7 from "/src/assets/elo-imgs/Logotipo_EloSaúde_SemFundo-07.png";

function Header() {
  const [menuSide, setStatusSide] = useState(false);

  const showSidebar = () => {
    document.querySelector(".sidebar").classList.add("aside-open");
  };

  const closeSidebar = () => {
    document.querySelector(".sidebar").classList.remove("aside-open");
  };

  const menuHome = () => {
    if (menuSide === false) {
      document.querySelector(".sub-menu").style.display = "block";
      setStatusSide(true);
    } else {
      document.querySelector(".sub-menu").style.display = "none";
      setStatusSide(false);
    }
  };
  const menuBlog = () => {
    if (menuSide === false) {
      document.querySelector(".sub-menu-blog").style.display = "block";
      setStatusSide(true);
    } else {
      document.querySelector(".sub-menu-blog").style.display = "none";
      setStatusSide(false);
    }
  };
  const menuPages = () => {
    if (menuSide === false) {
      document.querySelector(".sub-menu-pages").style.display = "block";
      setStatusSide(true);
    } else {
      document.querySelector(".sub-menu-pages").style.display = "none";
      setStatusSide(false);
    }
  };
  // const menuClinics = () => {
  //   if (menuSide === false) {
  //     document.querySelector(".sub-menu-clinics").style.display = "block";
  //     setStatusSide(true);
  //   } else {
  //     document.querySelector(".sub-menu-clinics").style.display = "none";
  //     setStatusSide(false);
  //   }
  // };
  const menuDoctors = () => {
    if (menuSide === false) {
      document.querySelector(".sub-menu-doctors").style.display = "block";
      setStatusSide(true);
    } else {
      document.querySelector(".sub-menu-doctors").style.display = "none";
      setStatusSide(false);
    }
  };
  const searchModal = () => {
    document.querySelector(".search-form-wrapper").classList.toggle("open");
  };
  const closeSearchModal = () => {
    document.querySelector(".search-form-wrapper").classList.remove("open");
  };

  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsHeaderSticky(window.scrollY > 0);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="sidebar">
      <div className="sigma_aside-overlay aside-trigger-right"></div>
      <aside className="sigma_aside">
        <div className="sigma_close aside-trigger" onClick={closeSidebar}>
          <span></span>
          <span></span>
        </div>
        <div className="sigma_logo-wrapper">
          <Link to="/" className="sigma_logo">
            <img src={logoHeader} alt="logo" />
          </Link>
        </div>
        <ul className="navbar-nav">
          <li className="menu-item menu-item-has-children">
            <a onClick={menuHome}>Início</a>
            <ul className="sub-menu">
              <li className="menu-item">
                <Link to="/">Página inicial</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <a onClick={menuBlog}>Blog</a>
            <ul className="sub-menu sub-menu-blog">
              <li className="menu-item">
                <Link to="/blog">Postagens</Link>
              </li>
            </ul>
          </li>
          <li className="menu-item menu-item-has-children">
            <a onClick={menuPages}>Informações</a>
            <ul className="sub-menu sub-menu-pages">
              <li className="menu-item">
                <Link to="/about">Sobre</Link>
              </li>
              {/* <li className="menu-item">
                <Link to="/services">Serviços</Link>
              </li> */}
            </ul>
          </li>
          {/* <li className="menu-item menu-item-has-children">
            <a onClick={menuClinics}>Clinicas</a>
            <ul className="sub-menu sub-menu-clinics">
              <li className="menu-item">
                <Link to="/clinics">Lista de Clinicas</Link>
              </li>
            </ul>
          </li> */}
          <li className="menu-item menu-item-has-children">
            <a onClick={menuDoctors}>Médicos</a>
            <ul className="sub-menu sub-menu-doctors">
              <li className="menu-item">
                <Link to="/doctors">Lista de Médicos</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/contact">Contato</Link>
          </li>
        </ul>
      </aside>
      <div className="sigma_aside-overlay aside-trigger"></div>
      <header className="sigma_header header-absolute style-5 other can-sticky">
        {/* <div className="sigma_header-top dark-bg d-none d-md-block">
          <div className="container-fluid">
            <div className="sigma_header-top-inner">
              <div className="sigma_header-top-links">
                <ul className="sigma_header-top-nav">
                  <li>
                    <a>
                      <i className="fal fa-envelope"></i>
                      info@website.com
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fal fa-map-marker-alt"></i>
                      Oakwood, Los Angeles, CA 1098
                    </a>
                  </li>
                </ul>
              </div>
              <div className="sigma_header-top-contacts">
                <ul className="sigma_header-top-nav">
                  <li>
                    {" "}
                    <a>
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a>
                      <i className="fab fa-google"></i>
                    </a>
                  </li>
                  <li className="d-flex align-items-center">
                    <a className="sigma_avatar">
                      <img
                        src="/src/assets/img/user.jpg"
                        className="rounded-circle"
                        alt="user"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
        <div
          className={`sigma_header-middle ${isHeaderSticky ? "sticky" : ""}`}
        >
          <div
            className="container-fluid"
            style={{
              borderBottom: "1px solid rgba(0, 0, 0, .1)",
            }}
          >
            <div className="navbar">
              <div className="sigma_logo-wrapper">
                <Link to="/" className="sigma_logo">
                  <img
                    src={isHeaderSticky === false ? logoElo3 : logoElo7}
                    alt="logo"
                  />
                </Link>
              </div>
              <ul className="navbar-nav">
                <li className="menu-item menu-item-has-children">
                  <Link to="/">Início</Link>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="menu-item menu-item-has-children">
                  <Link to="/about">Sobre</Link>
                </li>
                {/* <li className="menu-item menu-item-has-children">
                  <Link to="/services">Serviços</Link>
                </li> */}
                {/* <li className="menu-item menu-item-has-children">
                  <a>Médicos</a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="/doctors">Lista de Médicos</Link>
                    </li>
                  </ul>
                </li> */}

                {/* <li className="menu-item menu-item-has-children">
                  <a>Clinicas</a>
                  <ul className="sub-menu sub-menu-clinics">
                    <li className="menu-item">
                      <Link to="/clinics">Lista de Clinicas</Link>
                    </li>
                  </ul>
                </li> */}

                <li className="menu-item menu-item-has-children">
                  <Link to="/contact">Contato</Link>
                </li>
              </ul>
              <div className="sigma_header-controls style-2">
                <ul className="sigma_header-controls-inner">
                  {/* <li
                    onClick={searchModal}
                    className="search-trigger header-controls-item d-none d-sm-block"
                  >
                    <a
                      className="sigma_header-control-search bg-transparent border-0"
                      title="Search"
                    >
                      <i className="far fa-search"></i>
                    </a>
                  </li> */}

                  <li
                    className="aside-toggle aside-trigger"
                    onClick={showSidebar}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="search-form-wrapper">
        <div onClick={closeSearchModal} className="search-trigger sigma_close">
          <span></span>
          <span></span>
        </div>
        <form className="search-form" method="post">
          <input type="text" placeholder="Pesquisar..." />
          <button type="submit" className="search-btn">
            <i className="fal fa-search m-0"></i>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Header;
