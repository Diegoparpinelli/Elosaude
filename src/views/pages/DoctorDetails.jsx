import React, { useState } from 'react'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import AboutMe from '../../components/AboutMe'
import LocalDoctor from '../../components/LocalDoctor'
import OverveiwDoctor from '../../components/OverveiwDoctor'
import PlaceDoctor from '../../components/PlaceDoctor'
import ReviewsDoctors from '../../components/ReviewsDoctors'
import ContactDoctors from '../../components/ContactDoctors'
import Banner from '../../components/Banner'
import SearchTopic from '../../components/SearchTopic'

function DoctorDetails() {
  const data = JSON.parse(sessionStorage.getItem("slectDoctor"))
  const [doctor, setDoctor] = useState(data)
  const [schedules, setSchedules] = useState(data.doctor.address[0].servicetimes)

  // console.log(doctor)

  const imageBlogStandart = '/src/assets/img/blog-standard/adv.jpg'

  return (
    <section className="btn-style-5 sigma_header-absolute btn-rounded sidebar-style-9">
      <Header />
      {/* 
      <Banner
        title='Médicos'
        toLink='Início'
        actualLink='Médicos'
      /> */}

      <div className="section sigma_post-details" >
        <div className="container">
          <SearchTopic style={{ margin: "10px 0 30px 0" }} />
          <div className="row">
            <div className="col-lg-8">
              <div className="sigma_post-details-inner">
                <div className="entry-content">


                  <LocalDoctor doctor={doctor.doctor} setSchedules={setSchedules} />

                  {/* <div className="detail-menu-list">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <div className="menu nav-item">
                          <a className="nav-link active p-0">Overview</a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="menu nav-item">
                          <a href='/' className="nav-link p-0">Location &amp; Contact</a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="menu nav-item border-0">
                          <a className="nav-link p-0">Review</a>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="spacer">
                  </div>

                  <OverveiwDoctor doctor={doctor.doctor}>
                    {doctor.doctor.specialist.length > 0 ?
                      doctor.doctor.specialist.map(elem => {
                        return <>
                          <li>
                            <i className="far fa-check"></i>
                            <span>{elem.specialist}</span>
                          </li>
                        </>
                      }) : null}
                  </OverveiwDoctor>

                  <div className="spacer">
                  </div>

                  {
                    doctor.doctor.address.map(
                      elem => {
                        return <PlaceDoctor
                          address={`${elem.street},
                           ${elem.district},
                            ${elem.city}`}
                          phones={elem.phones}
                          emails={elem.emails}
                        />

                      }
                    )
                  }


                  <div className="spacer">
                  </div>

                  <div className="spacer"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="sidebar style-10 mt-5 mt-lg-0">

                <div className="widget widget-form">
                  <h5 className="widget-title">Horário de Atendimento</h5>
                  <div className="widget-inner widget-service">
                    {schedules.map(elem => {

                      return <>
                        <h6>
                          {elem.day}
                        </h6>
                        <h5>
                          {elem.schedules}
                        </h5>
                      </>
                    })}
                  </div>
                </div>



                <div className="widget widget-banner">
                  <div className="banner-area">
                    <img
                      src={imageBlogStandart}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  );
}

export default DoctorDetails;
