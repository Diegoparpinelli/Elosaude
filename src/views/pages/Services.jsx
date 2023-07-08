import React from "react";
import Banner from "../../components/Banner";
import CardSpecialization from "../../components/CardSpecialization";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import imageBanner from "/src/assets/img/home-1/1920x1280-1.jpg"

function Services() {
  return (
    <section className="btn-style-5 sigma_header-absolute btn-rounded sidebar-style-8">
      <Header />
      <div className="search-form-wrapper">
        <div className="search-trigger sigma_close">
          <span></span>
          <span></span>
        </div>
      </div>
      <Banner
        title="Serviços"
        toLink="Início"
        actualLink="Serviços"
        image={imageBanner}
      />

      <div className="section section-padding sigma_service-sec style-16">
        <div className="container">
          <div className="row">
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
            <CardSpecialization name="Therapiya" />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default Services;
