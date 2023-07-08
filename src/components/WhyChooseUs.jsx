import React from "react";

function WhyChooseUs() {
  const logo5 = '/src/assets/elo-imgs/Logotipo_EloSaúde_ComFundo-05.jpg'

  return (
    <div id="about" className="section secondary-overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 order-2 order-lg-1">
            <div className="sigma_about style-21">
              <div className="section-title">
                <h3 className="title text-white">
                  Por que Escolher a EloSaúde?
                </h3>
              </div>
              <div className="sigma_about-content">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. It is
                  a long established fact that a reader will be Lorem ipsum
                  dolor sit amet consectetur.
                </p>
                <div className="sigma_info style-15">
                  <div className="sigma_info-title">
                    <i className="flaticon-heartbeat sigma_info-icon"></i>
                  </div>
                  <div className="sigma_info-description">
                    <h5>Quality Control System</h5>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                </div>
                <div className="sigma_info style-15 mb-0">
                  <div className="sigma_info-title">
                    <i className="flaticon-group sigma_info-icon"></i>
                  </div>
                  <div className="sigma_info-description">
                    <h5>Highly Professional Staff</h5>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 order-1 order-lg-2">
            <div className="sigma_about style-21 mt-0 w-100 h-100">
              <div className="sigma_about-image-1">
                <img
                  src={logo5}
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sigma_counter-wrapper margin-negative bg-primary-1 style-5">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="sigma_counter style-5">
                <span>
                  <b className="counter" data-from="0" data-to="340">
                    340
                  </b>

                  <span className="plus">+</span>
                </span>
                <p className="text-white">Usuários</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="sigma_counter style-5">
                <span>
                  <b className="counter" data-from="0" data-to="120">
                    1
                  </b>

                  <span className="plus">+</span>
                </span>
                <p className="text-white">Anos de Experiência</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="sigma_counter style-5">
                <span>
                  <b className="counter" data-from="0" data-to="120">
                    120
                  </b>

                  <span className="plus">+</span>
                </span>
                <p className="text-white">Associados</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="sigma_counter style-5">
                <span>
                  <b className="counter" data-from="0" data-to="80">
                    80
                  </b>

                  <span className="plus">+</span>
                </span>
                <p className="text-white">Serviço Referência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
