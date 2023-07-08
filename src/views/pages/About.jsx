import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import HowWork from "../../components/HowWork";
import WhyChooseUs from "../../components/WhyChooseUs";
import CardTeamAbout from "../../components/CardTeamAbout";

import imageBanner from "/src/assets/img/home-1/1920x1280-1.jpg"

function About() {
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
        title="Sobre"
        toLink="Início"
        actualLink="Sobre"
        image={imageBanner}
      />

      <div className="section">
        <HowWork />
      </div>

      <WhyChooseUs />

      <div className="section section-padding"></div>

      <div className="section section-padding bg-gray">
        <div className="container">
          <div className="section-title centered">
            <span className="subtitle">Conheça Nosso Time</span>
            <h3 className="title mb-0">Nosso Time Criativo</h3>
            <br />
          </div>
          <div className="row">
            <CardTeamAbout />
            <CardTeamAbout />
            <CardTeamAbout />
            <CardTeamAbout />
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default About;
