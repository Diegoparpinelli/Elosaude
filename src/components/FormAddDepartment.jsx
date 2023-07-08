import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import api from "../url/url";

function FormAddDepartment() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const departmentData = {
      departamentname: data.departamentname,
    };

    const body = await JSON.parse(sessionStorage.getItem("key"));

    setIsLoading(true);
    setSuccessMessage("");

    fetch(`${api.URLAPI}/api/managedepartament`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
      body: JSON.stringify(departmentData),
    }).then(() => {
      setIsLoading(false);
      resetField("departamentname");
      setSuccessMessage("Departamento criado com sucesso.");
    });
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
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
                <Link to="/dashboard/department">Departamentos</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Adicionar Departamentos
              </li>
            </ol>
          </nav>
        </div>
        <div className="col-xl-12 col-md-12">
          <div className="ms-panel">
            <div className="ms-panel-header ms-panel-custome">
              <h6>Adicionar Departamento</h6>
              <Link to="/dashboard/department">Lista de Departamentos</Link>
            </div>
            <div className="ms-panel-body">
              <form
                className="needs-validation"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="row">
                  <div className="col mb-3">
                    <label>Nome do Departamento</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="..."
                        {...register("departamentname", { required: true })}
                      />
                    </div>
                    {errors?.departamentname?.type === "required" && (
                      <p style={{ color: "red", marginLeft: "1em" }}>
                        Departamento Obrigatótio
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
      </div>
    </div>
  );
}

export default FormAddDepartment;
