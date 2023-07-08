import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function BannerSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="sigma_banner style-8 img-back-banner">
      <div className="sigma_banner-slider">
        <Slider {...settings}>
          <div className="banner-slider-inner bg-center bg-cover secondary-overlay">
            <div className="sigma_banner-text text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h5 className="text-white">Markets & Resources</h5>
                    <h1 className="title text-white">
                      Encontre o melhor <br /> Médico perto de você.
                    </h1>
                    <div className="banner-links d-flex align-items-center justify-content-center">
                      <Link to="/doctors" className="sigma_btn">
                        ENCONTRE UM MÉDICO
                        <i className="fal fa-plus ms-3 d-none d-sm-inline-block"></i>
                      </Link>
                      <Link to="/about" className="sigma_btn light ms-4">
                        SAIBA MAIS
                        <i className="fal fa-plus ms-3 d-none d-sm-inline-block"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-slider-inner bg-center bg-cover secondary-overlay">
            <div className="sigma_banner-text text-center">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <h5 className="text-white">Markets & Resources</h5>
                    <h1 className="title text-white">
                      Encontre o melhor <br /> Médico perto de você.
                    </h1>
                    <div className="banner-links d-flex align-items-center justify-content-center">
                      <Link to="/doctors" className="sigma_btn">
                        ENCONTRE UM MÉDICO
                        <i className="fal fa-plus ms-3 d-none d-sm-inline-block"></i>
                      </Link>
                      <a className="sigma_btn light ms-4">
                        SAIBA MAIS
                        <i className="fal fa-plus ms-3 d-none d-sm-inline-block"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default BannerSlider;
