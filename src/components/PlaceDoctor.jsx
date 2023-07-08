import React, { useState } from "react";

function PlaceDoctor({ address, phones, emails }) {
  console.log(phones)
  return (
    <div id="contact">
      <h4>Localização</h4>
      <div className="sigma_contact-wrapper">
        {/* <div className="sigma_contact-map"> */}
        {/* <iframe
            src="https://www.google.com/maps/place/Ditado+Popular+Bar/@-11.8609555,-55.5042768,15z/data=!4m6!3m5!1s0x93a77ff6fdcd7e71:0x2739d5a6de195de1!8m2!3d-11.8553535!4d-55.5054362!16s%2Fg%2F11c0xjw5_0"
            height="600">
          </iframe> */}

        {/* <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32152.20608395216!2d-55.5222328!3d-11.8632738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77ff6fdcd7e71%3A0x2739d5a6de195de1!2sDitado%20Popular%20Bar!5e0!3m2!1spt-BR!2sbr!4v1680531988264!5m2!1spt-BR!2sbr">
        </iframe> */}

        {/* </div> */}
        <div className="sigma_contact-blocks">
          <h5>Endereço</h5>
          <div className="row">
            <div className="col-md-4">
              <div className="sigma_contact-block style-3">
                <i className="fal fa-map-marker-alt icon"></i>
                <div className="contact-block-inner">
                  <p>{address}</p>
                  {/* <p className="mb-0">Tampa, FL 33634</p> */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sigma_contact-block style-3 mt-3 mt-md-0">
                <i className="fal fa-phone icon"></i>
                <div className="contact-block-inner">
                  {phones.map(elem => {
                    return <p>{elem.phone}</p>

                  })}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="sigma_contact-block style-3 mt-3 mt-md-0">
                <i className="fal fa-globe icon"></i>
                <div className="contact-block-inner">
                  {emails.map(elem => {
                    return <p>{elem.email}</p>

                  })}

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceDoctor;
