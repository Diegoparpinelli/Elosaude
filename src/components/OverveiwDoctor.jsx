import React from "react";

function OverveiwDoctor({ children, doctor },) {

  return (
    <div id="overview">
      <h4>Sobre </h4>
      <p>
        {doctor.overview}
      </p>
      <div className="spacer">
      </div>
      <h4>Serviços Referências</h4>
      <div className="row">
        <div className="col-lg-6">
          <div className="sigma_general-list style-3">
            <ul>{children}</ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverveiwDoctor;
