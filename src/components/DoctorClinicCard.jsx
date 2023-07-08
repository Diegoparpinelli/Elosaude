import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

function DoctorClinicCard(props) {

  const [days, setDays] = useState([])
  
  

  function setDoctor(){
    sessionStorage.setItem("slectDoctor", JSON.stringify(props))
  }

  function teste() {
    const daysData = props.doctor.address[0].servicetimes.map( elem => {
      return elem.day.replace(":", "")
    })
    setDays(  daysData )
  }
    useEffect(
      ()=>{
        teste()
      },
      []
    )



  return (
    <div className="sigma_team style-17" >
      <div className="row g-0">
        <div className="col-md-3">
          <div className="sigma_team-thumb">
            <img src= {`http://localhost:3333/uploads/doctorImg${props.doctor.id}.jpg`} alt="team" style={{minWidth: "12em", minHeight: "12em", maxHeight: "12em", maxWidth: "12em"}}/>
          </div>
        </div>
        <div className="col-md-5 col-sm-6" style={{width: "20em", maxWidth: "20em"}}>
          <div className="sigma_team-body">
            <h5>

              <Link onClick={()=>{setDoctor()}} to={props.linkTo} >{`${props.doctor.first_name} ${props.doctor.last_name}`}</Link>

            </h5>
            <div className="sigma_team-categories">
              {/* <a className="sigma_team-category">{props.doctor.specialists[0]}</a> */}
            </div>
            <div className="d-flex align-items-center mt-4">
              <Link onClick={()=>{setDoctor()}} to={props.linkTo} state={props.doctor} className="sigma_btn">View More</Link>

            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-6" style={{width: "15em", minWidth: "15em", maxWidth: "15em"}}>
          <div className="sigma_team-footer">

            <div className="sigma_team-info">

            { undefined == props.doctor.address ?  null :               <span>
                <i className="fal fa-map-marker-alt"></i>
                {`${props.doctor.address[0].street}, ${props.doctor.address[0].city}`}
              </span> }

              <span>
                <i className="fal fa-map-marker-alt"></i>
                {`5545454545`}
              </span>

              { days.length > 0 ? <span>
                <i className="fal fa-calendar"></i>
                {`${days.map( elem => elem )}`}
              </span> : null}

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DoctorClinicCard