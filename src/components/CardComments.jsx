import React from 'react'

import imageHome100 from "/src/assets/img/home-1/100x100.png"

function CardComments() {

  return (
    <div className="sigma_testimonial bg-gray style-13">
      <div className="sigma_testimonial-thumb">
        <img src={imageHome100} alt="testimonial" />
        <span className="fas fa-quote-left sigma_testimonial-icon"></span>
      </div>
      <div className="sigma_testimonial-body">
        <p>"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</p>
        <div className="sigma_author-block">
          <h5>
            Eugene Freeman
          </h5>
          <span className="sigma_testimonial-category">Tincidunt</span>
        </div>
      </div>
    </div>

  )
}

export default CardComments