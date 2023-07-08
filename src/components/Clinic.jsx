import React, { useState } from 'react'
import '../views/Admin/assets/css/style.css'

import NavDropdown from 'react-bootstrap/NavDropdown';
import EditableInputComponent from './EditableInputComponent'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Select from './Select';
import ItemEditableImput from './ItemEditableImput';
import AdressDoctors from './AdressDoctors';

import imageDoctor1 from "/src/views/Admin/assets/img/dashboard/doctor-1.jpg"

function Clinic(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // function onDelete(){
  //   const body = JSON.parse(sessionStorage.getItem("key"))

  //   fetch(`http://127.0.0.1:3333/api/doctor/${props.id}`,
  //   {method: 'DELETE', headers: {"Content-Type": "application/json",  "Authorization": `${body.type} ${body.token}`}})

  // }


  return (

    <div className='doctors'>
      <div className="ms-card margin-correct">
        <div className="ms-card-body">
          <div className="media fs-14">
            <div className="me-2 align-self-center">
              <img src={imageDoctor1} className="ms-img-round" alt="people" />
            </div>
            <div className="media-body">
              <h6>{props.name}</h6>
              <div className="dropdown float-end">
                <NavDropdown
                  title={
                    <span data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="material-icons">more_vert</i>
                    </span>
                  }
                >
                  <NavDropdown.Item onClick={handleShow}>
                    <span onClick={handleShow}>Detalhes</span>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    {props.btn}
                  </NavDropdown.Item>

                </NavDropdown>
                <Modal
                  enforceFocus={false}
                  centered
                  show={show}
                  onHide={handleClose}
                  size='xl'
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Detalhes</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className='modal-body-doctor'>

                    <EditableInputComponent
                      title='Nome'
                      hiddenAddMore={true}
                    >
                      <ItemEditableImput
                        type='text'
                        value='Algum Nome'
                      />
                    </EditableInputComponent>

                    <Select title='Departamento'>
                      <option value="">Algum departamento</option>
                    </Select>

                    <label className='label-doctor'>
                      Sobre
                    </label>
                    <textarea name="Sobre" defaultValue='Informações e outras coisas' id="" cols="30" rows="10"></textarea>
                    <br />


                    <AdressDoctors />


                  </Modal.Body>
                  <Modal.Footer style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button variant="danger" onClick={handleClose}>
                      Fechar
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                      Salvar Mudanças
                    </Button>
                  </Modal.Footer>
                </Modal>

              </div>
              <p className="fs-12 my-1 text-disabled">{props.departament}</p>
              <h6 className="mt-2">
                <span className="fs-14">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                {props.address}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clinic