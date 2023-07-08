import React from "react";
import Banner from "../../components/Banner";
import CardContact from "../../components/CardContact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MakeRequest from "../../components/MakeRequest";

import imageBanner from "/src/assets/img/home-1/1920x1280-1.jpg"


function Contact() {
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
        title="Contato"
        toLink="Início"
        actualLink="Contato"
        image={imageBanner}
      />

      <div className="section section-padding">
        <div className="container">
          <div className="row">
            <CardContact icon="fa fa-home" />
            <CardContact icon="fa fa-home" />
            <CardContact icon="fa fa-home" />
          </div>
        </div>
      </div>

      <MakeRequest />

      <Footer />
    </section>
  );
}

export default Contact;
