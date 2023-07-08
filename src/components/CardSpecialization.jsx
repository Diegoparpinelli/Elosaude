import React from 'react'

import { CiMedicalClipboard } from 'react-icons/ci'

function CardSpecialization(props) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className="sigma_service style-16">
        <div className="sigma_service-thumb">
          <i style={{ fontWeight: '200', color: '#00a3c8' }} ><CiMedicalClipboard /></i>
        </div>
        <div className="sigma_service-body">
          <h5>
            <a>{props.name}</a>
          </h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod</p>
          <a className="btn-link primary-color">

            Ver

            <i className="far fa-long-arrow-alt-right"></i>

          </a>
        </div>
      </div>
    </div>
  )
}

export default CardSpecialization