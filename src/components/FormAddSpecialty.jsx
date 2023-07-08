import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../url/url";
import { useNavigate } from "react-router-dom";

function FormAddSpecialty() {
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([{}]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDoctorspecialist, setSelectedDoctorspecialist] = useState([]);

  console.log(selectedDoctor);

  const [specialists, setSpecialists] = useState([]);
  const [specialistFiltered, setSpecialistsFiltered] = useState([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState("");
  const [reset, setReset] = useState(false);
  const [msgDelete, setMsgDelete] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);
  const [isLoadingRemove, setIsLoadingRemove] = useState(false);

  const [successMessage, setSuccessMessage] = useState("");
  const [successMessageAdd, setSuccessMessageAdd] = useState("");
  const [successMessageRemove, setSuccessMessageRemove] = useState("");

  async function getDoctors() {
    const body = JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/managedoctor`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
    }).then((data) => data);
  }

  useEffect(() => {
    const getData = () => {
      const body = JSON.parse(sessionStorage.getItem("key"));

      fetch(`${api.URLAPI}/api/managedoctor`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${body.type} ${body.token}`,
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setDoctors(data);
        });

      fetch(`${api.URLAPI}/api/managespecialist`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${body.type} ${body.token}`,
        },
      })
        .then((data) => data.json())
        .then((data) => {
          setSpecialists(data);
          setSpecialistsFiltered(data);
        })
        .catch((erro) => {
          navigate("/login");
        });
    };

    getData();
  }, []);

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

  const {
    register,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setSuccessMessage("");

    if (data.specialistname == "") {
      const dataSpecialist = {
        specialists: data.specialists,
      };
      const body = await JSON.parse(sessionStorage.getItem("key"));

      fetch(`${api.URLAPI}/api/managespecialist/${selectedDoctor.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${body.type} ${body.token}`,
        },
        body: JSON.stringify(dataSpecialist),
      }).then(() => {
        setTimeout(() => {
          fetch(`${api.URLAPI}/api/managedoctor`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${body.type} ${body.token}`,
            },
          })
            .then((data2) => data2.json())
            .then((data2) => {
              setDoctors(data2);
              setSelectedDoctor(
                data2.filter((elem) => {
                  if (elem.id == selectedDoctor.id) {
                    return elem;
                  }
                })[0]
              );
              setMsgDelete(true);
              setInterval(() => {
                setMsgDelete(false);
              }, 600);
            });
        }, 200);
      });
    } else {
      const dataSpecialist = {
        specialistname: data.specialistname,
      };

      const body = await JSON.parse(sessionStorage.getItem("key"));

      fetch(`${api.URLAPI}/api/managespecialist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${body.type} ${body.token}`,
        },
        body: JSON.stringify(dataSpecialist),
      }).then(() => {
        setReset(!reset);
        resetField("specialistname");
        setIsLoading(false);
        setSuccessMessage("Serviço Referência criado com sucesso.");
      });
      setTimeout(() => {
        setSuccessMessage("");
      }, 2000);
    }
  };

  const onSubmitAddToDoctor = async (data) => {
    setIsLoadingAdd(true);
    setSuccessMessage("");

    const dataSpecialist = {
      specialists: data.specialists,
    };
    const body = await JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/managespecialist/${selectedDoctor.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
      body: JSON.stringify(dataSpecialist),
    }).then(() => {
      setTimeout(() => {
        fetch(`${api.URLAPI}/api/managedoctor`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${body.type} ${body.token}`,
          },
        })
          .then((data2) => data2.json())
          .then((data2) => {
            setDoctors(data2);
            setSelectedDoctor(
              data2.filter((elem) => {
                if (elem.id == selectedDoctor.id) {
                  return elem;
                }
              })[0]
            );
            // setMsgDelete(true)
            setIsLoadingAdd(false);
            setSuccessMessageAdd("Serviço Referência adicinada com sucesso");
            // setInterval(() => { setMsgDelete(false) }, 600)
          });
        setTimeout(() => {
          setSuccessMessageAdd("");
        }, 2000);
      }, 200);
    });
  };

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
                <Link to="/dashboard/specialty">Serviço Referência</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Adicionar Serviço Referência
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-xl-12 col-md-12">
          <div className="ms-panel">
            <div className="ms-panel-header ms-panel-custome">
              <h6>Adicionar Serviço Referência</h6>
              <Link to="/dashboard/specialty">Lista de Serviço Referência</Link>
            </div>
            <div className="ms-panel-body">
              <form
                className="needs-validation"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="row">
                  <div className="col mb-3">
                    <label>Serviço Referência</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Serviço Referência"
                        {...register("specialistname", { required: true })}
                      />
                    </div>
                    {errors?.specialistname?.type === "required" && (
                      <p style={{ color: "red", marginLeft: "1em" }}>
                        Informe a Serviço Referência
                      </p>
                    )}

                    {successMessage && (
                      <p style={{ color: "green", marginLeft: "1em" }}>
                        {successMessage}
                      </p>
                    )}
                  </div>
                </div>
                <div className="row"></div>

                <button
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

        <div className="ms-content-wrapper">
          <div className="ms-panel">
            <div className="ms-panel-header ms-panel-custome">
              <h6>Adicionar Serviço Referência ao Médico</h6>
            </div>
            <div className="ms-panel-body">
              <form
                className="needs-validation"
                onSubmit={handleSubmit(onSubmitAddToDoctor)}
              >
                <div className="row">
                  <div className="col mb-3">
                    <label>Médico</label>
                    <div className="input-group">
                      <select
                        name=""
                        required
                        id=""
                        onChange={(e) => {
                          doctors.map((elem) => {
                            if (elem.id == Number(e.currentTarget.value)) {
                              setSelectedDoctor(elem);
                            }
                          });
                        }}
                      >
                        <option value=""></option>
                        {doctors.map((elem, index) => {
                          return (
                            <option
                              key={index}
                              value={elem.id}
                            >{`${elem.first_name} ${elem.last_name}`}</option>
                          );
                        })}
                      </select>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label>Serviço Referência do Médico</label>
                        {
                          <ul
                            style={{
                              overflow: "auto",
                              maxHeight: "12.4em",
                              marginBottom: "15px",
                            }}
                          >
                            {selectedDoctor == null
                              ? null
                              : selectedDoctor.specialist.map((elem, index) => {
                                  return (
                                    <>
                                      <li
                                        key={index}
                                        className="ms-list-item ps-0"
                                      >
                                        <label className="ms-checkbox-wrap">
                                          <input
                                            type="checkbox"
                                            name="radioExample"
                                            value={elem.id}
                                            onChange={(e) => {
                                              e.currentTarget.checked == true
                                                ? setSelectedDoctorspecialist([
                                                    e.currentTarget.value,
                                                    ...selectedDoctorspecialist,
                                                  ])
                                                : setSelectedDoctorspecialist(
                                                    selectedDoctorspecialist.filter(
                                                      (value) =>
                                                        value !==
                                                        e.currentTarget.value
                                                    )
                                                  );
                                            }}
                                          />
                                          <i className="ms-checkbox-check"></i>
                                        </label>
                                        <span>{`${elem.specialist}`}</span>
                                      </li>
                                    </>
                                  );
                                })}
                          </ul>
                        }
                        {successMessageRemove && (
                          <p
                            style={{
                              color: "red",
                              fontSize: "1rem",
                            }}
                          >
                            {successMessageRemove}
                          </p>
                        )}
                        <button
                          className="btn btn-primary"
                          onClick={async (e) => {
                            setIsLoadingRemove(true);
                            const body = await JSON.parse(
                              sessionStorage.getItem("key")
                            );
                            fetch(
                              `${api.URLAPI}/api/managespecialist/${selectedDoctorspecialist}`,
                              {
                                method: "DELETE",
                                headers: {
                                  "Content-Type": "application/json",
                                  Authorization: `${body.type} ${body.token}`,
                                },
                                body: JSON.stringify({
                                  doctor_id: selectedDoctor.id,
                                }),
                              }
                            ).then((data) => {
                              setSuccessMessageRemove("Removido com sucesso");

                              setTimeout(() => {
                                fetch(`${api.URLAPI}/api/managedoctor`, {
                                  method: "GET",
                                  headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `${body.type} ${body.token}`,
                                  },
                                })
                                  .then((data2) => data2.json())
                                  .then((data2) => {
                                    setDoctors(data2);
                                    setSelectedDoctor(
                                      data2.filter((elem) => {
                                        if (elem.id == selectedDoctor.id) {
                                          return elem;
                                        }
                                      })[0]
                                    );
                                    setMsgDelete(true);
                                    setInterval(() => {
                                      setMsgDelete(false);
                                    }, 200);
                                    setIsLoadingRemove(false);
                                    setSelectedDoctorspecialist([]);
                                  });
                                setTimeout(() => {
                                  setSuccessMessageRemove("");
                                }, 4000);
                              }, 200);
                            });
                          }}
                          disabled={
                            isLoadingRemove || selectedDoctorspecialist == ""
                          }
                        >
                          {isLoadingRemove ? "Carregando..." : "Remover"}
                        </button>
                      </div>

                      <div className="col-md-6 mb-3">
                        <label>Todas as Serviço Referência</label>
                        <input
                          type="text"
                          placeholder="Buscar"
                          onChange={(e) => {
                            filterSpecialists(e.target.value);
                          }}
                        />
                        <ul style={{ overflow: "auto", maxHeight: "10em" }}>
                          {specialistFiltered.map((elem, index) => {
                            return (
                              <>
                                <li key={index} className="ms-list-item ps-0">
                                  <label className="ms-checkbox-wrap">
                                    <input
                                      type="checkbox"
                                      name="radioExample"
                                      value={elem.id}
                                      onClick={(e) =>
                                        setSelectedSpecialist(elem.id)
                                      }
                                      {...register("specialists", {
                                        required: false,
                                      })}
                                    />
                                    <i className="ms-checkbox-check"></i>
                                  </label>
                                  <span>{elem.specialist}</span>
                                </li>
                              </>
                            );
                          })}
                        </ul>
                        {successMessageAdd && <p>{successMessage}</p>}
                        <button
                          type=""
                          disabled={isLoadingAdd || selectedSpecialist == ""}
                          className="btn btn-primary mt-4 d-inline w-20"
                        >
                          {isLoadingAdd ? "Carregando..." : "Adicionar"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormAddSpecialty;
