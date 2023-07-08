import React from "react";
import { Link } from "react-router-dom";

function FormAddUser() {
  return (
    <div className="ms-content-wrapper">
      <div className="row">
        <div className="col-md-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0">
              <li className="breadcrumb-item">
                <Link to="/dashboard"> Início</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/dashboard/user">Usuários</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Adicionar Usuário
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-xl-12 col-md-12">
          <div className="ms-panel">
            <div className="ms-panel-header ms-panel-custome">
              <h6>Adicionar Usuário</h6>
              <Link to="/dashboard/user">Lista de Usuários</Link>
            </div>
            <div className="ms-panel-body">
              <form className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Usuário</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Usuario"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Senha</label>
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Senha"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-2">
                    <label>Tipo de Usuario</label>
                    <div className="input-group">
                      <select className="form-control">
                        <option value="">test</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Nome</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>E-mail</label>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-primary mt-4 d-inline w-20"
                  type="submit"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormAddUser;
