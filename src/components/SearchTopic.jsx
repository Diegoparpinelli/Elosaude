import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../url/url'

function SearchTopic({ style, func }) {
  const navigate = useNavigate()


  async function getDoctors() {

    // const body = await JSON.parse(sessionStorage.getItem("key"))

    const doctorsData = await fetch(`${api.URLAPI}/api/managedoctor`,
      { method: 'GET', headers: { "Content-Type": "application/json" } }
    ).then(data => data.json())

    sessionStorage.setItem("doctors", JSON.stringify(doctorsData))
    setDoctors(doctorsData)
  }


  useEffect(
    () => {
      getDoctors()
    },
    []
  )



  const data = sessionStorage.getItem("doctors")
  const [doctors, setDoctors] = useState([])
  console.log(doctors)


  const [city, setCity] = useState("")
  const [valor, setValor] = useState("")

  function filter(valor) {
    if (valor == "") {

      const filter = doctors.filter(elem => {

        const valid = elem.address.map(elem2 => {

          if (elem2.city.toUpperCase().
            includes(city.toUpperCase())) {

            return true
          }
        })

        if (valid[0] == true) {
          return elem
        }
      })

      sessionStorage.removeItem("queryDoctors")
      sessionStorage.setItem("queryDoctors", JSON.stringify(filter))

      func ? func(filter) : navigate("/doctors")

    } else {
      const filter = doctors.filter(elem => {

        const valid = elem.address.map(elem2 => {

          if (elem2.city.toUpperCase().includes(city.toUpperCase())) {

            return true
          }
        })

        if (valid[0] == true) {
          return elem
        }
      })

      const end = filter.filter(elem => {

        if (elem.first_name.toUpperCase().includes(valor.toUpperCase()) || elem.last_name.toUpperCase().includes(valor.toUpperCase()) || elem.specialist.find(elem2 => elem2.specialist.toUpperCase() == valor.toUpperCase()) || elem.departament.departament.toUpperCase().includes(valor.toUpperCase())) {
          return elem
        }
      })

      sessionStorage.setItem("queryDoctors", JSON.stringify(end))

      func ? func(end) : navigate("/doctors")
    }



  }
  return (
    <div className="sigma_banner-info style-2" style={style}>
      <div className="container">
        <div className="sigma_cta style-13">
          <form method="post">
            <div className="row g-0">
              <div className="col-lg-6">
                <div className="form-group with-label">
                  <i className="fal fa-search d-none d-sm-block"></i>
                  <label>Pesquise por tópico</label>
                  <input type="text" className="topic-field" name="fname" placeholder="Pesquise por médicos, clinicas, Serviço Referência etc." autoComplete='off' onChange={e => { setValor(e.target.value) }} />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>Localização</label>
                  <div className="input-group">
                    <i className="fal fa-map-marker-alt d-none d-sm-block"></i>
                    <input type="text" className="location-field" name="location" placeholder="Localização" onChange={e => { setCity(e.target.value) }} />
                    <div className="input-group-append">
                      <button type="button" onClick={() => { filter(valor); valor == "" ? null : fetch(`${api.URLAPI}/api/keyword`, { method: "POST", body: JSON.stringify({ keyWord: valor }), headers: { "Content-Type": "application/json" } }) }}>
                        <i className="fal fa-search me-1"></i>
                        Procurar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchTopic;
