import React, {useState} from 'react'

function LocalDoctor(props) {
  console.log(props)
  return (
    <div className="sigma_team style-17 mb-0">
      <div className="row g-0">
        <div className="col-md-4">
          <div className="sigma_team-thumb">
            <img src= {`http://localhost:3333/uploads/doctorImg${props.doctor.id}.jpg`} alt="team" />
          </div>
        </div>
        <div className="col-md-8">
          <div className="sigma_team-body">
            <h5>

              <a>{`${props.doctor.first_name} ${props.doctor.last_name}`}</a>

            </h5>

            <div className="sigma_team-categories">
              {props.doctor.specialists !== undefined ? <a className="sigma_team-category">{props.doctor.specialists[0].specialist}</a> : null}
            </div>

                         
            <div className="sigma_team-info mt-4">
              {props.doctor.address[0].phones >= 1 ?
              <span>
                <i className="fal fa-phone"></i>

                {props.doctor.address[0].phones[0].phone}

              </span>
              :
              null
              }
              {props.doctor.address[0].emails >= 1 ?
              <span>
                <i className="fal fa-at"></i>

                {props.doctor.address[0].emails[0].email}

              </span>
              :
              null
              }
              {props.doctor.address.map( elem => { 
                console.log(elem.servicetimes)
                return <span onMouseEnter={()=>props.setSchedules(elem.servicetimes)} style={{cursor: "default", width: "max-content"}}>

                    <i className="fal fa-building"></i>

                    {`${elem.street}, ${elem.district}, ${elem.city}`}
              

                  </span>
              })
              }
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalDoctor;
