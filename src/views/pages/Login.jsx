import "../Admin/assets/css/style.css";
import React, { useReducer, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import { data } from "jquery";
import { useNavigate } from "react-router-dom";
import api from "../../url/url";

import Spinner from 'react-bootstrap/Spinner';

function Login() {

  const [showErroLogin, setShowErroLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { erros },
  } = useForm();
  const onSubmit = (data) => {
    setIsLoading(true)

    fetch(`${api.URLAPI}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(async (data) => {
      let body = await data.json();
      // console.log(body)

      sessionStorage.setItem("key", JSON.stringify(body));

      fetch(`${api.URLAPI}/api/manageuser`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${body.type} ${body.token}`,
        },
      }).then(async (data) => {
        let body = await data.json();
        sessionStorage.setItem("userData", JSON.stringify(body));
        data.ok ? navigate(`/dashboard`) : setShowErroLogin(true);
      }).finally(() => {
        setIsLoading(false);
      });
    })
      .catch(() => {
        setIsLoading(false);
        setShowErroLogin(true)
      });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="ms-content-wrapper ms-auth">
        <div className="ms-auth-container">
          <div className="ms-auth-col">
            <div className="ms-auth-bg"></div>
          </div>
          <div className="ms-auth-col">
            <div className="ms-auth-form">
              <form
                className="needs-validation"
                noValidate=""
                onSubmit={handleSubmit(onSubmit)}
              >
                <h1>Acesse sua Conta</h1>
                <p>Por favor, digite seu e-mail e senha para continuar</p>
                <div className="mb-3">
                  <label htmlFor="validationCustom08">Endereço de E-mail</label>
                  <div className="input-group">
                    <input type="text" onClick={() => { setShowErroLogin(false) }} className="form-control" id="validationCustom08" placeholder="Username" required {...register("username")} />

                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="validationCustom09">Senha</label>
                  <div className="input-group">
                    <input type="password" onClick={() => { setShowErroLogin(false) }} className="form-control" id="validationCustom09" placeholder="Password" required {...register("password")} />

                  </div>
                  {showErroLogin ? (
                    <span
                      style={{
                        color: "red",
                        display: 'flex',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        marginTop: "-10px"
                      }}>
                      Usuário ou senha incorretos!
                    </span>
                  ) : null}
                </div>
                <div className="form-group">
                  <label className="ms-checkbox-wrap">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                    />
                    <i className="ms-checkbox-check"></i>
                  </label>
                  <span> Lembrar Senha </span>
                  <label className="d-block mt-3">
                    <span
                      onClick={handleShow}
                      className="btn-link"
                      data-bs-toggle="modal"
                      style={{ cursor: "pointer" }}
                      data-bs-target="#modal-12"
                    >
                      Esqueceu a Senha?
                    </span>
                  </label>
                </div>
                <button
                  className="btn btn-primary mt-4 d-block w-100"
                  type="submit"
                >
                  {isLoading ? <Spinner size="sm" animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner> : "Entrar"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="modal-login">
            {/* <i className="flaticon-secure-shield d-block"></i> */}
            <h3>Esqueceu a Senha?</h3>
            <p> Digite seu e-mail para recuperar sua senha </p>
          </div>
          <form className="form-modal-login" method="post">
            <div className="ms-form-group has-icon">
              <input
                required
                type="email"
                placeholder="E-mail..."
                className="form-control"
                name="forgot-password"
                defaultValue=""
              />
              <i className="material-icons">email</i>
            </div>
            <button className="btn btn-primary shadow-none">
              Recuperar Senha
            </button>
          </form>
        </Modal.Body>
      </Modal>

      <div
        className="modal fade"
        id="modal-12"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="modal-12"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-min"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-body text-center">
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>

              <form method="post">
                <div className="ms-form-group has-icon">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="form-control"
                    name="forgot-password"
                    defaultValue=""
                  />
                  <i className="material-icons">email</i>
                </div>
                <button type="submit" className="btn btn-primary shadow-none">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
