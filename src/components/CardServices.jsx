import React from 'react'

import imageHome300 from "/src/assets/img/home-1/300x240.jpg"

function CardSrvices() {


  return (
    <div className='teste'>
      <div className="sigma_service style-17">
        <div className="sigma_service-thumb">
          <img src={imageHome300} alt="img" />
        </div>
        <div className="sigma_service-body">
          <h5>

            <a>Therapiya</a>

          </h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod Lorem ipsum dolor sit.</p>
          <a className="btn-link primary-color">

            Read More

            <i className="fal fa-arrow-right"></i>

          </a>
        </div>
      </div>
    </div >
  )
}

export default CardSrvices