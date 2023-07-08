import React from "react";

function CardContact(props) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="sigma_info style-24">
        <div className="sigma_info-title">
          <span className="sigma_info-icon bg-primary-1 text-white">
            <i className={props.icon}></i>
          </span>
        </div>
        <div className="sigma_info-description">
          <h5>Nosso Endereço</h5>
          <p>PSD Building, 2 Tower St, United States.</p>
        </div>
      </div>
    </div>
  );
}

export default CardContact;
