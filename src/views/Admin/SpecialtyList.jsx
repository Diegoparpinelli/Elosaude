import React from 'react'
import { Link } from 'react-router-dom'
import api from '../../url/url'

import HeaderDash from '../../components/HeaderDash'

import DataTable from 'react-data-table-component';
import { useState, useEffect } from 'react';
import { Popover, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';

function SpecialtyList() {

  const [data, setData] = useState()


  async function getDepartament() {

    const body = JSON.parse(sessionStorage.getItem("key"))

    fetch(`${api.URLAPI}/api/managespecialist`,
      { method: 'GET', headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` } }
    ).then(data => data.json()).then(async data => {


      let dataList = []

      await data.map(async elem => {
        const dataEdited = {
          id: elem.id,
          specialty: elem.specialist,
          action:
            <div className='icons-table'>

              <Popover bg={'red'} size={1} placement='right' closeOnBlur={false}>
                <PopoverTrigger>

                  <i style={{ cursor: 'pointer' }} className='far fa-trash-alt ms-text-danger'></i>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverBody><button style={{
                    backgroundColor: 'red',
                    padding: '10px',
                    height: '15px',
                    width: '15px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '5px'

                  }} onClick={() => handleDelete(elem.id)}>
                    X</button>
                  </PopoverBody>
                </PopoverContent>
              </Popover>

            </div>,
        }

        await dataList.push(dataEdited)
      })

      await setData(dataList)
    })

  }

  useEffect(() => {
    getDepartament()
  }, [])

  const handleDelete = async (idSpeciality) => {
    const body = JSON.parse(sessionStorage.getItem('key'));

    try {
      const response = await fetch(`${api.URLAPI}/api/managespecialist/${idSpeciality}`, {
        method: 'DELETE', headers: {
          'Content-Type': 'application/json',
          Authorization: `${body.type} ${body.token}`,
        },
      });

      if (response.ok) {
        getDepartament();
      } else {
        throw new Error('Falha ao excluir a Serviço Referência.');
      }
    } catch (error) {
      console.log(error);
    }
  };


  const columns = [
    {
      name: '#',
      selector: row => row.id,
      sortable: true,
      compact: true,
      width: '120px',
      center: true,
      style: {
        height: '45px'
      }
    },
    {
      name: 'Specialty Name',
      selector: row => row.specialty,
      sortable: true,
      compact: true,
      center: true,
    },
    {
      name: 'Action',
      selector: row => row.action,
      sortable: true,
      width: '120px',
      compact: true,
      center: true,
    }
  ];



  return (
    <HeaderDash>
      <div className="ms-content-wrapper">

        <div className="row">
          <div className="col-md-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb ps-0">
                <li className="breadcrumb-item"><Link to='/dashboard'> Início</Link></li>
                <li className="breadcrumb-item"><a >Epecialidades</a></li>
                <li className="breadcrumb-item active" aria-current="page">Lista de Epecialidades</li>
              </ol>
            </nav>
          </div>

          <div className="col-xl-12">
            <div className="ms-panel">
              <div className="ms-panel-header  ms-panel-custome">
                <h6>Lista de Epecialidades</h6>
                <Link to='/dashboard/Specialty/add' className="ms-text-primary">Adicionar Epecialidade</Link>
              </div>
              <div className="ms-panel-body">
                <div className="table-responsive">

                  <DataTable
                    columns={columns}
                    data={data}
                    pagination
                    dense
                  />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HeaderDash>
  )
}

export default SpecialtyList