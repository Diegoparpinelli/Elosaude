import { React, useEffect, useState } from 'react'

import CardInfoDashboard from '../../components/CardInfoDashboard'
import HeaderDash from '../../components/HeaderDash'
import ChartPie from '../../components/ChartPie'
import api from '../../url/url'

import './assets/css/style.css'

function Dashboard() {

  const [graph, setGraph] = useState([]);

  function getKeyword() {
    fetch(`${api.URLAPI}/api/keyword`, { method: "GET" }).then(data => data.json()).then(data2 => setGraph(data2))
  }

  const [data, setData] = useState({ first_name: "" })
  console.log(data)
  async function getDados() {
    const dados = await sessionStorage.getItem("userData")
    return JSON.parse(dados)
  }

  useEffect(() => {
    setData(d => d = JSON.parse(sessionStorage.getItem("userData")))


  }, [])

  useEffect(
    () => {
      getKeyword();


    },
    []
  )

  return (

    <HeaderDash
      userName={data.first_name}
    >
      <div>
        <div className="ms-content-wrapper">
          <div className="row">

            <CardInfoDashboard />
            <CardInfoDashboard />
            <CardInfoDashboard />
            <CardInfoDashboard />
            {/* 
            <div className="col-xl-4 col-lg-6 col-md-12">

              <ChartsDashboard
                name='Patients'
              />

              <ChartsDashboard
                name='Patients'
              />

              <ChartsDashboard
                name='Patients'
              />

            </div> */}

            <div className="col-xl-4 col-lg-6 col-md-12">
              <div className="ms-panel ms-panel-fh">
                <div className="ms-panel-body calendar-wedgit">


                  <ChartPie
                    labels={graph.map((elem) => elem[0].keyword)}
                    values={graph.map(elem => elem.length)}
                    title='Palavras mais buscadas'
                  />

                </div>
              </div>
            </div>

            {/* <div className="col-xl-4 col-md-12">
              <div className="ms-card ms-widget ms-profile-widget ms-card-fh br-0">
                <div className="ms-card-img">
                  <img src="src/views/Admin/assets/img/dashboard/doctor-1.jpg" alt="card_img" />
                </div>
                <img src="src/views/Admin/assets/img/dashboard/doctor-1.jpg" className="ms-img-large ms-img-round ms-user-img" alt="people" />
                <div className="ms-card-body">
                  <h2>Anny Farisha</h2>
                  <span>Doctor</span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in arcu turpis. Nunc</p>
                  <ul className="ms-profile-stats">
                  </ul>
                </div>
                <div className="ms-panel-body calendar-wedgit">
                  <CalendarComponent />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </HeaderDash >
  )
}

export default Dashboard