import React, { useEffect, useState } from "react";
import "../views/Admin/assets/css/style.css";
import api from '../url/url'

import NavDropdown from "react-bootstrap/NavDropdown";
import EditableInputComponent from "./EditableInputComponent";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Select from "./Select";
import ItemEditableImput from "./ItemEditableImput";

function User({ name, id, btn }) {


  const [show, setShow] = useState(false);
  const [username, setName] = useState(name)

  const [password, setPassword] = useState(null)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function updateUser() {

    const userData = password == null ?
      {
        user: {
          userName: username
        }
      } :
      {
        user: {
          userName: username,
          password: password
        }
      }

    const body = await JSON.parse(sessionStorage.getItem("key"))

    fetch(`${api.URLAPI}/api/manageuser/${id}`, { method: "PUT", headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` }, body: JSON.stringify(userData) })
    handleClose
  }

  useEffect(
    () => {

    },
    []
  )

  return (
    <div className="doctors">
      <div className="ms-card margin-correct">
        <div className="ms-card-body">
          <div className="media fs-14">
            <div className="media-body">
              <h6>ID: {id}</h6>
              <div className="dropdown float-end">
                <NavDropdown
                  title={
                    <span
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="material-icons">more_vert</i>
                    </span>
                  }
                >
                  <NavDropdown.Item onClick={handleShow}>
                    <span onClick={handleShow}>Detalhes</span>
                  </NavDropdown.Item>

                  <NavDropdown.Item>{btn}</NavDropdown.Item>
                </NavDropdown>
                <Modal centered show={show} onHide={handleClose} size="xl">
                  <Modal.Header closeButton>
                    <Modal.Title>Detalhes</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="modal-body-doctor">

                    <label>Usuário</label>
                    <input type="text" defaultValue={username} onChange={e => { setName(e.target.value) }} />


                    <label>Senha</label>
                    <input type="password" defaultValue={"Trocar Senha"} onChange={e => { setPassword(e.target.value) }} />


                  </Modal.Body>
                  <Modal.Footer
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Button variant="danger" onClick={handleClose}>
                      Fechar
                    </Button>
                    <Button variant="success" onClick={() => updateUser()}>
                      Salvar Mudanças
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <p className="fs-12 my-1 text-disabled"></p>
              <h6 className="mt-2">{username}</h6>
              <p className="fs-12 my-1 text-disabled"></p>
              <h6 className="mt-2"></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
