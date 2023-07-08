import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import api from "../url/url";

function FormAddDoctor(props) {
  const [roles, setRoles] = useState([]);
  const [departament, setDepartament] = useState([]);
  const [specialists, setSpecialists] = useState([]);
  const [user, setUser] = useState("doctor");
  const [addaddress, setAddAddress] = useState([]);
  const [specialistsFiltered, setSpecialistsFiltered] = useState([]);
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [MessageError, setMessageError] = useState("");

  const teste = () => {
    if (addaddress == "") {
      setMessageError("Defina o endereço");
      event.preventDefault();
    } else {
      setMessageError("");
    }
  };

  function createAddress(addressId) {
    if (addaddress.length == 0) {
      setAddAddress([{ id: 0 }]);
    } else {
      setAddAddress([
        ...addaddress,
        { id: Number(addaddress[addaddress.length - 1].id + 1) },
      ]);
    }
  }

  function deleteAddress(id) {
    let filtredAddress = addaddress.filter((elem) => elem.id != id);
    setAddAddress(filtredAddress);
  }

  function filterSpecialists(valor) {
    if (valor == "") {
      setSpecialistsFiltered(specialists);
    } else {
      const filter = specialists.filter((elem) => {
        if (elem.specialist.includes(valor)) {
          return elem;
        }
      });
      setSpecialistsFiltered(filter);
    }
  }

  async function getData() {
    const body = await JSON.parse(sessionStorage.getItem("key"));

    const roleData = await fetch(`${api.URLAPI}/api/managerole`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
    });

    const departamentData = await fetch(`${api.URLAPI}/api/managedepartament`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
    });

    const specialistData = await fetch(`${api.URLAPI}/api/managespecialist`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
    });

    const specialistDataTrue = await specialistData.json();
    setRoles(await roleData.json());
    setDepartament(await departamentData.json());
    setSpecialists(specialistDataTrue);
    setSpecialistsFiltered(specialistDataTrue);
  }
  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // event.preventDefault();
    setIsLoading(true);

    const addressData = data.address.map((elem) => {
      return {
        street: `${elem.street}, ${elem.number}`,
        district: elem.district,
        city: elem.city,
        phones: [],
        emails: [],
      };
    });

    const formData = new FormData();

    const doctorData = {
      doctor: {
        name: data.name,
        lastname: data.lastname,
        birthyday: data.birthyday.replace(/-/g, "/"),
        sex: Boolean(data.sex),
        departament: Number(data.departament),
        overview: data.overview,
      },
      specialists:
        Array.isArray(data.specialists) &&
        data.specialists.map((elem) => {
          if (elem == false) {
          } else {
            return Number(elem);
          }
        }),
      addresses: addressData,
      user: {
        username: data.username,
        password: data.password,
        role: data.role,
      },
    };

    formData.append("image", data.image[0]);
    formData.append("body", JSON.stringify(doctorData));

    const body = await JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/manageuser`, {
      method: "POST",
      headers: { Authorization: `${body.type} ${body.token}` },
      body: formData,
    }).then(() => {
      deleteAddress();
      alert("Médico adicionado com sucesso!");

      setIsLoading(false);
      resetField("username");
      resetField("password");
      resetField("name");
      resetField("lastname");
      resetField("image");
      resetField("address");
      resetField("specialists");
      resetField("department");
      resetField("birthyday");
      resetField("address");
      resetField("overview");
    });
  };

  useEffect(() => {
    getData();
    // setRoles([{role: "admin", id: 2}, {role: "doctor", id: 1}])
    // setDepartment([{departament: "teste", id: 2}, {departament: "teste2", id: 1}])
  }, []);

  return (
    <div className="ms-content-wrapper">
      <div className="row">
        <div className="col-md-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb ps-0">
              <li className="breadcrumb-item">
                <Link to="/dashboard">Início</Link>
              </li>
              <li className="breadcrumb-item">
                <a>{props.pathMidle}</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {props.pathFinal}
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-xl-12 col-md-12">
          <div className="ms-panel">
            <div className="ms-panel-header ms-panel-custome">
              <h6>Adicionar Médicos</h6>
              <Link to="/dashboard/doctor">Lista de Médicos</Link>
            </div>
            <div className="ms-panel-body">
              <form
                className="needs-validation"
                encType="multipart/form-data"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Usuário</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Usuario"
                        required
                        {...register("username", { required: true })}
                      />
                    </div>
                    {errors?.username?.type === "required" && (
                      <p style={{ color: "red", marginLeft: "1em" }}>
                        Usuario Obrigatótio
                      </p>
                    )}
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
                    {errors?.password?.type === "required" && (
                      <p style={{ color: "red", marginLeft: "1em" }}>
                        Senha Obrigatóraia
                      </p>
                    )}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-2">
                    <label>Tipo de Usuário</label>
                    <div className="input-group">
                      <select
                        className="form-control"
                        aria-label="tipo usuario"
                        {...register("role")}
                        onChange={(e) => setUser(e.target.value)}
                      >
                        {roles.map((elem) => {
                          return (
                            <option value={elem.role} required>
                              {elem.role}{" "}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <label>Imagem</label>
                    <div className="input-group ">
                      <input
                        type="file"
                        onChange={(e) => setImage(e.target.files[0])}
                        formEncType="multipart/form-data"
                        {...register("image", { required: true })}
                      />
                    </div>
                  </div>
                </div>

                {user == "doctor" ? (
                  <>
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
                        {errors?.name?.type === "required" && (
                          <p style={{ color: "red", marginLeft: "1em" }}>
                            Nome Obrigatório
                          </p>
                        )}
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
                        {errors?.lastname?.type === "required" && (
                          <p style={{ color: "red", marginLeft: "1em" }}>
                            Sobrenome Obrigatótio
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-2">
                        <label>Departmento</label>
                        <div className="input-group">
                          <select
                            className="form-control"
                            required
                            {...register("departament")}
                          >
                            <option value=""></option>
                            {departament.map((elem) => {
                              return (
                                <option value={elem.id} required>
                                  {elem.departament}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                      </div>
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
                    </div>
                    <div className="row">
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
                                {...register("sex", { required: true })}
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
                        {errors?.sex?.message == "" && (
                          <p
                            style={{
                              color: "red",
                              marginTop: "-20px",
                            }}
                          >
                            Campo Obrigatótio
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <span
                          className="btn btn-primary mb-4 w-20"
                          onClick={() => {
                            createAddress();
                          }}
                        >
                          Adicionar Endereço
                        </span>

                        <p
                          style={{
                            color: "red",
                            fontSize: "1rem",
                          }}
                        >
                          {MessageError}
                        </p>

                        {addaddress.map((elem) => {
                          return (
                            <>
                              <div className="row">
                                <div className="col-md-6 mb-3 mt-3">
                                  <label>Endereço {elem.id}</label>
                                  <span
                                    style={{
                                      height: "1em",
                                      width: "0.5em",
                                      margin: "0 0 0 0.5em",
                                    }}
                                    className="btn btn-danger  "
                                    accessKey={elem.id}
                                    onClick={(e) => {
                                      deleteAddress(Number(e.target.accessKey));
                                    }}
                                  >
                                    Excluir
                                  </span>
                                  <div>
                                    <div></div>
                                    <div style={{ margin: "10px" }}>
                                      <label htmlFor="">Rua</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Rua..."
                                        required
                                        {...register(
                                          `address.${elem.id}.street`,
                                          { required: true }
                                        )}
                                      />
                                    </div>
                                    <div style={{ margin: "10px" }}>
                                      <label htmlFor="">Número</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Número..."
                                        required
                                        {...register(
                                          `address.${elem.id}.number`,
                                          { required: true }
                                        )}
                                      />
                                    </div>
                                    <div style={{ margin: "10px" }}>
                                      <label htmlFor="">Bairro</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Bairro..."
                                        required
                                        {...register(
                                          `address.${elem.id}.district`,
                                          { required: true }
                                        )}
                                      />
                                    </div>
                                    <div style={{ margin: "10px" }}>
                                      <label htmlFor="">Cidade</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Cidade..."
                                        required
                                        {...register(
                                          `address.${elem.id}.city`,
                                          { required: true }
                                        )}
                                      />
                                    </div>
                                  </div>
                                  {errors?.lastname?.type === "required" && (
                                    <p
                                      style={{
                                        color: "red",
                                        marginLeft: "1em",
                                      }}
                                    >
                                      Sobrenome Obrigatótio
                                    </p>
                                  )}
                                </div>
                              </div>
                            </>
                          );
                        })}
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Serviço Referência</label>
                        <input
                          type="text"
                          placeholder="Buscar"
                          onChange={(e) => {
                            filterSpecialists(e.target.value);
                          }}
                        />
                        <ul style={{ overflow: "auto", maxHeight: "10em" }}>
                          {specialistsFiltered.map((elem, index) => {
                            return (
                              <>
                                <li className="ms-list-item ps-0">
                                  <label className="ms-checkbox-wrap">
                                    <input
                                      type="checkbox"
                                      name="radioExample"
                                      value={elem.id}
                                      {...register("specialists", {
                                        required: true,
                                      })}
                                    />
                                    <i className="ms-checkbox-check"></i>
                                  </label>
                                  <span>{elem.specialist}</span>
                                  {errors?.specialists?.message == "" && (
                                    <p
                                      style={{
                                        color: "red",
                                      }}
                                    >
                                      Selecione uma opção
                                    </p>
                                  )}
                                </li>
                              </>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </>
                ) : null}

                <button
                  onClick={(e) => teste()}
                  className="btn btn-primary mt-4 d-inline w-20"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Carregando..." : "Criar"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormAddDoctor;
