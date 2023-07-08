import React from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutMe from "../../components/AboutMe";
import LocalDoctor from "../../components/LocalDoctor";
import OverveiwDoctor from "../../components/OverveiwDoctor";
import Map from "../../components/PlaceDoctor";
import ReviewsDoctors from "../../components/ReviewsDoctors";
import ContactDoctors from "../../components/ContactDoctors";
import Banner from "../../components/Banner";

import imageBanner from "/src/assets/img/home-1/1920x1280-1.jpg"

function ClinicsDetails() {
  const imageBlogStandart = '/src/assets/img/blog-standard/adv.jpg'

  return (
    <section className="btn-style-5 sigma_header-absolute btn-rounded sidebar-style-9">
      <Header />

      <Banner
        title="Clínicas"
        toLink="Início"
        actualLink="Clínicas"
        image={imageBanner}
      />

      <div className="section sigma_post-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="sigma_post-details-inner">
                <div className="entry-content">
                  <LocalDoctor />

                  <div className="detail-menu-list">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div className="menu nav-item">
                          <a className="nav-link active p-0">Overview</a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="menu nav-item">
                          <a className="nav-link p-0">Location &amp; Contact</a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="menu nav-item border-0">
                          <a className="nav-link p-0">Review</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <OverveiwDoctor>
                    <li>
                      <i className="far fa-check"></i>
                      <span>Best Fitness Excercises</span>
                    </li>
                    <li>
                      <i className="far fa-check"></i>
                      <span>Best Fitness Excercises</span>
                    </li>
                    <li>
                      <i className="far fa-check"></i>
                      <span>Best Fitness Excercises</span>
                    </li>
                  </OverveiwDoctor>

                  <div className="spacer"></div>

                  <Map />

                  <div className="spacer"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar style-10 mt-5 mt-lg-0">
                <AboutMe />

                <div className="widget widget-form">
                  <h5 className="widget-title">Horário de Atendimento</h5>
                  <div className="widget-inner widget-service">
                    <h5>De segunda a sexta:</h5>
                    <h6>08:00 ás 17:00</h6>
                    <br />
                    <h5>Finais de semana e feriados:</h5>
                    <h6>08:00 ás 13:00</h6>
                  </div>
                </div>

                <ContactDoctors />

                <div className="widget widget-banner">
                  <div className="banner-area">
                    <img
                      src={imageBlogStandart}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default ClinicsDetails;
