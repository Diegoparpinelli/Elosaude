import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Doctors from "../../components/Doctors";
import HeaderDash from "../../components/HeaderDash";
import api from "../../url/url";
import ReactPaginate from "react-paginate";
import Modal from "../../components/modal/Modal";

function DoctorList() {
  const [doctors, setDoctors] = useState([]);
  const [update, setUpdate] = useState(false);

  const [doctorsFiltered, setDoctorsFiltered] = useState([]);

  function filterDoctors(valor) {
    if (valor == "") {
      setDoctorsFiltered(doctors);
    } else {
      const filter = doctors.filter((elem) => {
        if (elem.first_name.includes(valor) || elem.last_name.includes(valor)) {
          return elem;
        }
      });
      setDoctorsFiltered(filter);
    }
  }

  async function getDoctors() {
    const body = await JSON.parse(sessionStorage.getItem("key"));

    const doctorsData = await fetch(`${api.URLAPI}/api/managedoctor`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
    });

    const doctorDataTrue = await doctorsData.json();
    setDoctors(doctorDataTrue);
    setDoctorsFiltered(doctorDataTrue);
  }

  function onDelete(id) {
    const body = JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/managedoctor/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
    }).then((data) => {
      setUpdate(!update);
    });
  }

  useEffect(() => {
    getDoctors();
  }, [update]);

  console.log(doctors);

  return (
    <div>
      <HeaderDash>
        <div className="doctor-content">
          <div className="col-md-12 ">
            <nav aria-label="breadcrumb" className="ms-panel-custome">
              <ol className="breadcrumb ps-0">
                <li className="breadcrumb-item">
                  <Link to="/dashboard"> Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/dashboard/doctor">Doctor</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Doctor-List
                </li>
              </ol>
            </nav>
          </div>
          <div className="search-doctors">
            <div className="widget widget-search">
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  placeholder="Pesquisar"
                  autoComplete="true"
                  onChange={(e) => {
                    filterDoctors(e.target.value);
                  }}
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    onClick={(e) => {
                      filterDoctors(e.target.value);
                    }}
                  >
                    <i className="fal fa-search me-0"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="doctor-list-item">
            {doctorsFiltered.map((elem) => {
              return (
                <Doctors
                  updatevalue={update}
                  setUpdate={setUpdate}
                  doctor={elem}
                  name={`${elem.first_name} ${elem.last_name}`}
                  departament={elem.departament_id}
                  address={elem.address}
                  btn={
                    <span
                      onClick={() => {
                        onDelete(elem.id);
                      }}
                    >
                      Delete
                    </span>
                  }
                />
              );
            })}

            {/* <Doctors /> */}
          </div>
        </div>
      </HeaderDash>
    </div>
  );
}

export default DoctorList;
