import React, { useEffect, useState } from 'react'
import '../views/Admin/assets/css/style.css'
import { useForm } from 'react-hook-form';

import NavDropdown from 'react-bootstrap/NavDropdown';
import EditableInputComponent from './EditableInputComponentSchedules'

import Button from 'react-bootstrap/Button';
import Modal from './modal/Modal';
import Select from './Select';
import ItemEditableImput from './ItemEditableImput';

import api from '../url/url'
import { Form } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';
import AdressDoctors from './AdressDoctors';

function Doctors(props) {

  const [show, setShow] = useState(false);
  const [departament, setDepartament] = useState([])
  const [modalShow, setModalShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [doctorData, setDoctorData] = useState({})

  async function getData() {
    const body = await JSON.parse(sessionStorage.getItem("key"))

    const departamentData = await fetch(`${api.URLAPI}/api/managedepartament`,
      { method: 'GET', headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` } })

    setDepartament(await departamentData.json())
  }

  const { register, handleSubmit, watch, formState: { erros } } = useForm();

  const onSubmit = data => {
    const updateData = {
      first_name: data.first_name,
      last_name: data.last_name,
      birthy_day: data.birthy_day.replace(/-/g, "/"),
      departament: Number(data.departament_id),
      specialist: [],
      overview: data.overview
    }

    data.birthy_day == "" ? delete updateData.birthy_day : null;


    const body = JSON.parse(sessionStorage.getItem("key"))

    fetch(`${api.URLAPI}/api/managedoctor/${props.doctor.id}`,
      { method: "PUT", headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` }, body: JSON.stringify(updateData) })
      .then(data => {
        props.setUpdate(!props.updatevalue)
        handleClose()
      })

  }



  // useEffect(()=>{
  //   getData()

  // },[])

  return (


    <div className='doctors'>
      <div className="ms-card margin-correct">
        <div className="ms-card-body">
          <div className="media fs-14">
            <div className="me-2 align-self-center">
              <img src={`http://localhost:3333/uploads/doctorImg${props.doctor.id}.jpg`} className="ms-img-round" alt="people" style={{ width: "50px", height: "50px" }} />
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
                    <span onClick={() => { setModalShow(!modalShow) }}>Detalhes</span>
                  </NavDropdown.Item>

                  <NavDropdown.Item>
                    {props.btn}
                  </NavDropdown.Item>

                </NavDropdown>
                {modalShow ? <Modal setShowModal={setModalShow} data={props.doctor} setUpdate={props.setUpdate} updatevalue={props.updatevalue} /> : null}
                {/* <Modal
                  enforceFocus={false}
                  centered
                  show={show}
                  onHide={handleClose}
                  size='xl'
                >
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Detalhes</Modal.Title>
                  </Modal.Header>
                  <Modal.Body className='modal-body-doctor'>
                    
                      <label className='label-doctor' htmlFor="">Nome</label>
                      <input type="text" name="" id=""  defaultValue={props.doctor.first_name} {...register("first_name", { required: false })} />
                    
                      <label className='label-doctor' htmlFor="">Sobrenome</label>
                      <input type="text" name="" id=""  defaultValue={props.doctor.last_name} {...register("last_name", { required: false })} />

                      <label className='label-doctor' htmlFor="">Departamento</label>
                      <select name="" id="" {...register("departament_id", { required: false })}>
                        <option value={props.doctor.departament_id}>{props.doctor.departament_id}</option>
                        {departament.map( elem =>{
                            return<option value={elem.id}>{elem.departament}</option>
                        })}
                      </select>
                    

                      <label className='label-doctor' htmlFor="">Serviço Referência</label>
                       
                        {props.doctor.specialist.map( elem =>{
                          console.log(elem)
                            return<>
                            
                            <label htmlFor="">{elem.specialist}</label>
                    
                            </>
                        })}
                      

                      <label className='label-doctor' htmlFor="">Data de Nascimento</label> 
                      <br />
                      <p>{props.doctor.birthy_day.replace(/-/g, "/").slice(0,10)}</p>
                      <input type="date"  defaultValue={props.doctor.birthy_day} {...register("birthy_day", { required: false })} />

                    


                    <label className='label-doctor'>
                      Sobre
                    </label>
                    <textarea name="Sobre" defaultValue={props.doctor.overview}  id="" cols="30" rows="10" {...register("overview", { required: false })}></textarea>
                    <br />

                    {props.doctor.address.map( elem => {
                    
                      return <AdressDoctors address={elem}/>
                    })}

                  </Modal.Body>
                  <Modal.Footer style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button variant="danger" onClick={handleClose}>
                      Fechar
                    </Button>
                    <button onSubmit={handleClose}>Salvar Mudanças</button>
                  </Modal.Footer>
                  
                  </form>
                </Modal> */}

              </div>
              <p className="fs-12 my-1 text-disabled">{props.doctor.departament.departament}</p>
              {/* <h6 className="mt-2">
                <span className="fs-14">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                {` ${props.address[0].street}, ${props.address[0].street}, ${props.address[0].street}`}</h6> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors