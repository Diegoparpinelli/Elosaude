import React from "react";

import { BiMessageAdd } from "react-icons/bi";

import imageHome150 from "/src/assets/img/home-1/150x100.png"

function SubscribeNews() {

  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
          <div className="sigma_cta style-14">
            <div className="sigma_cta-content d-block d-sm-flex align-items-center">
              <i>
                <BiMessageAdd />
              </i>

              <h4 className="mt-3 mt-sm-0">Receba Nossas Ultimas Postagens</h4>
            </div>
            <p className="text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <form method="post">
              <div className="input-group has-border">
                <input
                  type="email"
                  name="email"
                  placeholder="Endereço e E-mail"
                />
                <div className="input-group-append">
                  <button type="button" className="light">
                    <i className="fal fa-envelope me-2"></i>
                    Increver-se
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="sigma_clients-wrapper style-3">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="sigma_clients style-3">
                  <img src={imageHome150} alt="clients" />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="sigma_clients style-3">
                  <img
                    src={imageHome150}
                    alt="clients"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="sigma_clients style-3">
                  <img
                    src={imageHome150}
                    alt="clients"
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="sigma_clients style-3">
                  <img
                    src={imageHome150}
                    alt="clients"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeNews;
