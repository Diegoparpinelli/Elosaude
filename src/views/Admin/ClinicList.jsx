import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Doctors from '../../components/Doctors'
import HeaderDash from '../../components/HeaderDash'
import api from '../../url/url'
import ReactPaginate from 'react-paginate';
import Clinic from '../../components/Clinic'



function ClinicList() {


  const [doctors, setDoctors] = useState([])
  const [pageCount, setPageCount] = useState(0);
  const [pageNow, setPageNow] = useState(1)
  const [itemOffset, setItemOffset] = useState(0);
  const [endOffset, setEndOffSet] = useState(0)
  const [currentItems, setCurrentItems] = useState([{ first_name: "" }]);
  const [reload, setReload] = useState(false)
  // console.log(currentItems)

  // async function getDoctors(){

  //   const body = await JSON.parse(sessionStorage.getItem("key"))

  //   const doctorsData = await fetch(`http://127.0.0.1:3333/api/doctor`,
  //   {method: 'GET', headers: {"Content-Type": "application/json",  "Authorization": `${body.type} ${body.token}`}}
  //   )

  //   setDoctors(await doctorsData.json())
  // }

  // function onDelete(id) {
  //   const body = JSON.parse(sessionStorage.getItem("key"))

  //   fetch(`${api.URLAPI}/api/doctor/${id}`,
  //     { method: 'DELETE', headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` } })

  //   setCurrentItems(currentItems.filter(elem => elem.id !== id))

  // }

  function switchPageUp() {
    if (pageNow <= pageCount) {
      setPageNow(pageNow + 1)
      setCurrentItems(doctors.slice((endOffset * pageNow) - 3, endOffset * pageNow))
    }
  }
  function switchPageDown() {
    if (pageNow > 1) {
      setPageNow(pageNow - 1)

      setCurrentItems(doctors.slice((endOffset * pageNow) - 3, endOffset * pageNow))
    }
  }

  // useEffect(() => {

  //   const body = JSON.parse(sessionStorage.getItem("key"))

  //   fetch(`${api.URLAPI}/api/doctorinfo`,
  //     { method: 'GET', headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` } }
  //   ).then(data => data.json()).then(data => {
  //     setDoctors(data)
  //     setPageCount(Math.ceil(data.length / data.length))
  //     setEndOffSet(itemOffset + data.length)
  //     setCurrentItems(data.slice(itemOffset, endOffset))
  //   })



  // }, [endOffset])


  return (
    <div>
      <HeaderDash>
        <div className='doctor-content'>
          <div className="col-md-12 ">
            <nav aria-label="breadcrumb" className="ms-panel-custome">
              <ol className="breadcrumb ps-0">
                <li className="breadcrumb-item">
                  <Link to='/dashboard' > Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to='/dashboard/clinic'>Clínicas</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Lista de Clínicas</li>
              </ol>

            </nav>
          </div>
          <div className='search-doctors'>

            <div className="widget widget-search">
              <div className="input-group">
                <input type="text" name="search" placeholder="Pesquisar" />
                <div className="input-group-append">
                  <button type="button">
                    <i className="fal fa-search me-0"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='doctor-list-item' >


            {/* {currentItems.map(elem => {
              return <Doctors
                name={`${elem.first_name} ${elem.last_name}`}
                address={elem.address}
                phone={elem.phones}
                departament={elem.departament}
                btn={<span onClick={() => { onDelete(elem.id) }}>Delete</span>} />
            })} */}

            <Clinic />
            <Clinic />
            <Clinic />
            <Clinic />
            <Clinic />



          </div>
        </div>
      </HeaderDash>
    </div>
  )
}

export default ClinicList