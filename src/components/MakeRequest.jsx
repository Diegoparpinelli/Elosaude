import React from "react";

function MakeRequest() {
  return (
    <div className="section pt-0">
      <div className="container">
        <div className="section-title centered">
          <span className="subtitle">Envie um e-mail</span>
          <h3 className="title">Entre em Contato</h3>
        </div>
        <div className="sigma_form style-2">
          <form
            className="form_validate ajax_submit form_alert"
            method="post"
            encType="multipart/form-data"
          >
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="Nome Completo"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Endereço de E-mail"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    autoComplete="off"
                    placeholder="999-657-878"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <input
                    type="text"
                    name="phone"
                    autoComplete="off"
                    placeholder="Cidade"
                  />
                </div>
              </div>

              <div className="col-12">
                <div className="form-group">
                  <textarea
                    name="message"
                    autoComplete="off"
                    rows="10"
                    placeholder="Envie sua Mensagem"
                  ></textarea>
                </div>
              </div>
              <div className="col-12 text-center">
                <button type="submit">Enviar</button>
                <div className="server_response w-100"></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MakeRequest;
