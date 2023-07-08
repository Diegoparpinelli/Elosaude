import React from 'react'

function ContactDoctors() {
  return (
    <div className="widget">
      <h5 className="widget-title">Contact</h5>
      <div className="widget-inner">
        <div className="sigma_info style-24 p-0 shadow-none">
          <div className="sigma_info-title">
            <span className="sigma_info-icon bg-primary-1 text-white">

              <i className="fal fa-phone"></i>

            </span>
          </div>
          <div className="sigma_info-description">
            <h5>Our Phone</h5>
            <p>Telephone: 0029129102320</p>
            <p>Mobile: 000 2324 39493</p>
          </div>
        </div>
        <div className="sigma_info style-24 p-0 shadow-none">
          <div className="sigma_info-title">
            <span className="sigma_info-icon bg-primary-1 text-white">

              <i className="fal fa-envelope-open-text"></i>

            </span>
          </div>
          <div className="sigma_info-description">
            <h5>Our Email</h5>
            <p>Main Email: doc@email.com</p>
            <p>Inquiries: info@orex.com</p>
          </div>
        </div>
        <div className="sigma_info style-24 p-0 shadow-none mb-0">
          <div className="sigma_info-title">
            <span className="sigma_info-icon bg-primary-1 text-white">

              <i className="fal fa-map-marker-alt"></i>

            </span>
          </div>
          <div className="sigma_info-description">
            <h5>Our Address</h5>
            <p>PSD Building, 2 Tower St, United States.</p>
          </div>
        </div>
      </div>
    </div>)
}

export default ContactDoctors