import React from "react";
import { RxCalendar } from "react-icons/rx";
import { AiOutlineComment } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";

function HowWork() {
  return (
    <div>
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-lg-5">
            <div className="section-title">
              <span className="subtitle">Processo de Trabalho</span>
              <h3 className="title mb-0">Como Funciona?</h3>
            </div>
          </div>
          <div className="col-lg-4">
            <p className="mb-0">
              Donec rutrum congue leo eget malesuada. Nulla porttitor accumsan
              tincidunt. Vestibulum ante ipsum primis.
            </p>
          </div>
        </div>
        <div className="row sigma_info-wrapper style-25">
          <div className="col-lg-4 col-md-6">
            <div className="sigma_info style-25 d-block d-xl-flex">
              <div className="sigma_info-title">
                <span className="sigma_info-icon">
                  <BiSearchAlt2 style={{ fontSize: "50px" }} />
                </span>
              </div>
              <div className="sigma_info-description mt-4 mt-xl-0">
                <h5>
                  Encontre Online o Melhor <br /> Profissional
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
                <span className="steps">Passo 1</span>
                <span className="pulsive-dot"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sigma_info style-25 d-block d-xl-flex">
              <div className="sigma_info-title">
                <span className="sigma_info-icon">
                  <RxCalendar style={{ fontSize: "50px" }} />
                </span>
              </div>
              <div className="sigma_info-description mt-4 mt-xl-0">
                <h5>
                  Entre Em Contato e Marque Sua <br /> Consulta
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
                <span className="steps">Passo 2</span>
                <span className="pulsive-dot"></span>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="sigma_info style-25 d-block d-xl-flex">
              <div className="sigma_info-title">
                <span className="sigma_info-icon">
                  <AiOutlineComment style={{ fontSize: "50px" }} />
                </span>
              </div>
              <div className="sigma_info-description mt-4 mt-xl-0">
                <h5>
                  Deixe Seu <br /> Feedback
                </h5>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable.
                </p>
                <span className="steps">Passo 3</span>
                <span className="pulsive-dot"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWork;
