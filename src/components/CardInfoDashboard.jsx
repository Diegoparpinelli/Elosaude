import React from 'react'

function CardInfoDashboard() {
  return (
    <div className="col-xl-3 col-md-6 col-sm-6">
      <a className='a-dash-width' >
        <div className="ms-card card-gradient-custom ms-widget ms-infographics-widget ms-p-relative">
          <div className="ms-card-body media">
            <div className="media-body">
              <h6 className="h6-media-body">Pharmacists</h6>
              <p className="ms-card-change"> 3400</p>
            </div>
          </div>
          <i className="fas fa-briefcase-medical ms-icon-mr"></i>
        </div>
      </a>
    </div>
  )
}

export default CardInfoDashboard