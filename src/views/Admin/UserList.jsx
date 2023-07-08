import {React, useEffect, useState }from 'react'
import { Link } from 'react-router-dom'
import Doctors from '../../components/Doctors'
import HeaderDash from '../../components/HeaderDash'
import User from '../../components/User'
import api from '../../url/url'

function UserList() {
  const [users, setUsers] = useState([])
  const [usersFiltered, setUsersFiltered] = useState([])
  const [update, setUpdate] = useState(false)
  console.log(usersFiltered)
 


  function filterUsers(valor){
    
    if(valor == ""){
      setUsersFiltered(users)
      
    }else{
      const filter = users.filter( elem => {
        
        if(elem.username.includes(valor) ){
          console.log(elem)
          return elem
        }
      })
      setTimeout(()=>{setUsersFiltered(filter)}, 10)
      
      
    }
    
  }

  async function getUsers(){
    const body = await JSON.parse(sessionStorage.getItem("key"))

    fetch(`${api.URLAPI}/api/manageuser`, {method: "GET", headers: {"Content-Type": "application/json", "Authorization": `${body.type} ${body.token}`} }).then(data => data.json()).then(data2 => {
      setUsers(data2)
      setUsersFiltered(data2)
    })
  }

  useEffect(
    ()=>{
      getUsers()
    },
    [update]
  )

  return (
    <HeaderDash>
      <div className='doctor-content'>
        <div className="col-md-12 ">
          <nav aria-label="breadcrumb" className="ms-panel-custome">
            <ol className="breadcrumb ps-0">
              <li className="breadcrumb-item"><Link to='/dashboard' > Home</Link></li>
              <li className="breadcrumb-item"><Link to='/dashboard/user'>Usuários</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Lista de Usuários</li>
            </ol>

          </nav>
        </div>
        <div className='search-doctors'>

          <div className="widget widget-search">
            <div className="input-group">
              <input type="text" name="search" placeholder="Pesquisar"  onChange={e => {filterUsers(e.target.value)}}/>
              <div className="input-group-append">
                <button type="button">
                  <i className="fal fa-search me-0"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='doctor-list-item' >

          {
            usersFiltered.map(elem => {
              return <><User id={elem.id} name={elem.username} /></>
            })
          }


        </div>
      </div>
    </HeaderDash>
  )
}

export default UserList