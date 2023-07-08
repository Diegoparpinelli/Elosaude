import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import api from "../url/url";

function FormAdd(props) {
  // const [roles, setRoles] = useState([])
  // const [department, setDepartment] = useState([])

  // async function getData() {
  //   const body = await JSON.parse(sessionStorage.getItem("key"))

  //   const roleData = await fetch(`${api.URLAPI}/api/managerole`,
  //     { method: 'GET', headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` } })

  //   const departamentData = await fetch(`${api.URLAPI}/api/managedepartament`,
  //     { method: 'GET', headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` } })

  //   setRoles(await roleData.json())
  //   setDepartment(await departamentData.json())
  // }
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();
  // const onSubmit = async data => {

  //   const address = data.address.split(',')

  //   const addressData = {
  //     cityname: address[3],
  //     districtname: address[2],
  //     streetname: `${address[0]}, ${address[1]}`
  //   }

  //   const doctorData = {
  //     doctor: {
  //       name: data.name,
  //       lastname: data.lastname,
  //       birthyday: data.birthyday.replace(/-/g, "/"),
  //       sex: Boolean(data.sex),
  //       departament: Number(data.departament),
  //       overview: data.overview,
  //       evaluation: 0,
  //       email: data.email
  //     },
  //     addresses: [
  //       addressData
  //     ],
  //     phones: [
  //       {
  //         phonenumber: data.phonenumber
  //       }
  //     ],
  //     user: {
  //       username: data.username,
  //       password: data.password,
  //       role: data.role
  //     }
  //   }

  //   console.log(doctorData)

  //   const body = await JSON.parse(sessionStorage.getItem("key"))

  //   fetch(`${api.URLAPI}/api/manageuser`,
  //     {
  //       method: 'POST', headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` },
  //       body: JSON.stringify(doctorData)
  //     }).then(() => {

  //     }
  //     )
  //   resetField("username")
  //   resetField("password")
  //   resetField("name")
  //   resetField("lastname")
  //   resetField("email")
  //   resetField("phonenumber")
  //   resetField("department")
  //   resetField("birthyday")
  //   resetField("address")
  //   resetField("overview")

  // }

  // useEffect(() => {
  //   getData()
  // }, [])

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
                <Link to="/dashboard/clinic">Clínicas</Link>
              </li>

              <li className="breadcrumb-item active" aria-current="page">
                Adicionar Clínicas
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-xl-12 col-md-12">
          <div className="ms-panel">
            <div className="ms-panel-header ms-panel-custome">
              <h6>Adicionar Clínicas</h6>
              <Link to="/dashboard/clinic">Lista de Clínicas</Link>
            </div>
            <div className="ms-panel-body">
              <form
                className="needs-validation"
                // onSubmit={handleSubmit(onSubmit)}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Usuário</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Usuario"
                        {...register("username", { required: true })}
                      />
                    </div>
                    {/* {errors?.username?.type === "required" && <p style={{ color: "red", marginLeft: "1em" }}>Usuario Obrigatótio</p>} */}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Senha</label>
                    <div className="input-group">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Senha"
                        required
                        {...register("password", { required: true })}
                      />
                    </div>
                    {/* {errors?.password?.type === "required" && <p style={{ color: "red", marginLeft: "1em" }}>Senha Obrigatótia</p>} */}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-2">
                    <label>Tipo de Usuario</label>
                    <div className="input-group">
                      <select className="form-control">
                        {/* {roles.map(elem => {
                          return <option value={elem.role} required {...register("role")}>{elem.role}</option>
                        })} */}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Nome</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Nome"
                        required
                        {...register("name", { required: true })}
                      />
                    </div>
                    {/* {errors?.name?.type === "required" && <p style={{ color: "red", marginLeft: "1em" }}>Nome Obrigatório</p>} */}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Sobrenome</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Sobrenome"
                        required
                        {...register("lastname", { required: true })}
                      />
                    </div>
                    {/* {errors?.lastname?.type === "required" && <p style={{ color: "red", marginLeft: "1em" }}>Sobrenome Obrigatótio</p>} */}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Email</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        required
                        {...register("email", { required: true })}
                      />
                    </div>
                    {/* {errors?.lastname?.type === "required" && <p style={{ color: "red", marginLeft: "1em" }}>Email Obrigatótio</p>} */}
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Phone</label>
                    <div className="input-group">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="(00) 0 00000000"
                        required
                        {...register("phonenumber")}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-2">
                    <label>Departmento</label>
                    <div className="input-group">
                      <select
                        className="form-control"
                        required
                        {...register("department")}
                      >
                        {/* {department.map(elem => {
                          return <option value={elem.id} required {...register("departament")}>{elem.departament}</option>
                        })} */}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Data de Nascimento</label>
                    <div className="input-group">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Date of Birth"
                        required
                        {...register("birthyday")}
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label>Cidade</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Rua, n°, Bairro, Cidade"
                        required
                        {...register("address", { required: true })}
                      />
                    </div>
                    {/* {errors?.lastname?.type === "required" && <p style={{ color: "red", marginLeft: "1em" }}>Sobrenome Obrigatótio</p>} */}
                  </div>

                  <div className="col-md-12 mb-2">
                    <label>Sobre</label>
                    <div className="input-group">
                      <textarea
                        className="form-control"
                        id="exampleTextarea"
                        rows="3"
                        {...register("overview")}
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Sexo</label>
                    <ul className="ms-list d-flex">
                      <li className="ms-list-item ps-0">
                        <label className="ms-checkbox-wrap">
                          <input
                            type="radio"
                            name="radioExample"
                            value={true}
                            {...register("sex")}
                          />
                          <i className="ms-checkbox-check"></i>
                        </label>

                        <span> Masculino </span>
                      </li>

                      <li className="ms-list-item">
                        <label className="ms-checkbox-wrap">
                          <input
                            type="radio"
                            name="radioExample"
                            value={false}
                            defaultChecked=""
                            {...register("sex")}
                          />
                          <i className="ms-checkbox-check"></i>
                        </label>

                        <span> Feminino </span>
                      </li>
                    </ul>
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

export default FormAdd;
