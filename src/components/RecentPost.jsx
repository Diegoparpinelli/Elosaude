import React from "react";
import { useState } from "react";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import blogStandart from "../../src/assets/img/blog-standard/730x415.jpg"


function RecentPost(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(handleClose)

  const content = sessionStorage.getItem("postContent")

  const modal = props.modal

  return (
    <div className={`sigma_recent-post ${props.styled}`} >
      <div onClick={handleShow}>
        <div className="sigma_post-categories">
          <a>Categoria</a>
        </div>
        <div className="recent-post-descr">
          <h6>
            <a>Every Next Level Of Your Life Will Demand Something</a>
          </h6>
          <div className="author-info d-flex align-items-center">
            <span>TA</span>
            <div>
              <a className="author-name">Tim Abell</a>
              <a className="date">June 4, 2022</a>
            </div>
          </div>
        </div>
      </div>
      <div >

        {
          modal === true ?
            <div>
              <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="entry-content">
                    <a className="gallery-thumb">
                      <img
                        src={blogStandart}
                        alt="Capa da postagem"
                      />
                    </a>
                    <div className="sigma_post-details-meta">
                      <span>
                        {" "}
                        <i className="far fa-user"></i> By Admin
                      </span>
                      <span>
                        {" "}
                        <i className="far fa-calendar-alt"></i> March 12, 2022
                      </span>
                    </div>
                    <h3 className="entry-title">
                      Developing buildings in the new age is a bit of a process
                      with the new tech
                    </h3>

                    <div dangerouslySetInnerHTML={{ __html: content }} />


                  </div>
                </Modal.Body>
                <Modal.Footer style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <Button variant='danger' onClick={handleClose}>Rejeitar</Button>
                  <Button variant='success' onClick={handleClose}>Aprovar</Button>
                </Modal.Footer>
              </Modal>
            </div> : ''
        }
      </div>
    </div>


  );
}

export default RecentPost;
