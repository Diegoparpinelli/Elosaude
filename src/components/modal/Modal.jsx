import { useState } from 'react'
import './modal2.css'
import Address from './address'
import api from "../../url/url"
export default function Modal(props) {

    const [showAdd, setShowAdd] = useState(false)
    const [first_name, setFirst_name] = useState(props.data.first_name)
    const [last_name, setLast_name] = useState(props.data.last_name)
    const [birthy_day, setBirthy_day] = useState(props.data.birthy_day)
    const [overview, setOverview] = useState(props.data.overview)
    const [address, setAddress] = useState("")
    const [show, setShow] = useState("none")
    // const [userData, setUserData] = useState({first_name: "", last_name: "", birthy_day: "", overview: ""})
    // console.log(`${first_name} ${last_name}, ${birthy_day}, ${overview}`)
    // console.log(props.data)



    function addAddress() {
        const addres = address.split(',')
        const addressData = {
            city: addres[3],
            district: addres[2],
            street: `${addres[0]}, ${addres[1]}`,
            doctorname: props.data.id
        }



        const body = JSON.parse(sessionStorage.getItem("key"))

        fetch(`${api.URLAPI}/api/manageaddress`,
            { method: `POST`, headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` }, body: JSON.stringify(addressData) })
            .then(data => { props.setUpdate(!props.updatevalue) })
    }


    function editDoctor() {

        const doctorData = {
            first_name: first_name,
            last_name: last_name,
            birthy_day: birthy_day,
            overview: overview,
            specialist: []
        }

        const body = JSON.parse(sessionStorage.getItem("key"))

        fetch(`${api.URLAPI}/api/managedoctor/${props.data.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` },
            body: JSON.stringify(doctorData)
        }).then(data => {
            props.setShowModal(false)
            props.setUpdate(!props.updatevalue)
        })
    }

    function editImg(v) {
        const body = JSON.parse(sessionStorage.getItem("key"))

        const data = new FormData();

        data.append("image", v[0])

        fetch(`${api.URLAPI}/api/managedoctor/${props.data.id}`, {
            method: "PUT",
            headers: { "Authorization": `${body.type} ${body.token}` },
            body: data
        })
    }


    function modal() {
        return (
            <>
                <div className='ModalContainer' >
                    <div className='tentativa'>
                        <div className='ModalComponent' >

                            <div className='RowModal'>

                                <div className='ColumnModal'>
                                    <label htmlFor="upload">
                                        <img src={`${api.URLAPI}/uploads/doctorImg${props.data.id}.jpg`} style={{ width: "10em", height: "10em", borderRadius: "50%", margin: "0.5em" }} onMouseEnter={() => { setShow("flex") }} />
                                        <div style={{ display: show, justifyContent: "center", alignItems: "center", position: "absolute", top: "3em", width: "10em", height: "10em", backgroundColor: "rgba(255, 255, 255, 0.5)", borderRadius: "50%", margin: "0.5em" }} onMouseOut={() => { setShow("none") }}>
                                            <p style={{ color: "black", fontSize: "1.3em" }}>Editar Imagem</p>
                                        </div>
                                    </label>
                                    <input type='file' id='upload' style={{ display: "none" }} onChange={e => { editImg(e.currentTarget.files) }} />
                                </div>

                                <div className='ColumnModal'>
                                    <div className='RowModal'>
                                        <div className='ColumnModal'>
                                            <label>Nome:</label>
                                            <input className='ModalInput' type="text" defaultValue={props.data.first_name} onChange={e => { setFirst_name(e.target.value) }} />

                                        </div>

                                        <div className='ColumnModal'>
                                            <label>Sobrenome:</label>
                                            <input className='ModalInput' type="text" defaultValue={props.data.last_name} onChange={e => { setLast_name(e.target.value) }} />
                                        </div>
                                    </div>

                                    <div className='RowModal'>
                                        <div className='RowModal'>

                                            {/* <div className='ColumnModal' style={{width: "80px", height: "80px", margin: "8px"}}>

                                        </div> */}

                                            <div className='ColumnModal' >
                                                <label>Departamento:</label>
                                                <p>{props.data.departament.departament}</p>
                                            </div>

                                            <div className='ColumnModal'>
                                                <label>Data de Nascimento:</label>
                                                <input className='ModalInput' type="date" defaultValue={props.data.birthy_day.slice(0, 10)} onChange={e => { setBirthy_day(e.target.value) }} />
                                            </div>



                                        </div>

                                    </div>
                                </div>
                                <div className='ColumnModal'>
                                    <button onClick={() => { editDoctor() }}>S</button>

                                </div>

                                <div className='ColumnModal'>
                                    <button onClick={() => { props.setShowModal(false) }}>X</button>

                                </div>
                            </div>


                            <div className='ColumnModal' style={{ margin: "2em" }}>
                                <label>Sobre:</label>
                                <textarea defaultValue={props.data.overview} style={{ height: "8em" }} onChange={e => { setOverview(e.target.value) }}></textarea>
                            </div>

                            <div className='RowAddress'>
                                <p style={{ marginBottom: 0 }}>Endereços:</p>
                                <small onClick={() => { setShowAdd(!showAdd) }} style={{ cursor: "pointer", width: "max-content" }}>adicionar</small>

                                <div style={{ display: "flex", flexDirection: "row" }}>
                                    {showAdd ? <>
                                        <input className='ModalInput' type="text" placeholder='Rua, nº, Bairro, Cidade' onChange={e => { setAddress(e.target.value) }} style={{ marginBottom: "1em", height: "2em", width: "20em" }} />
                                        <button onClick={() => { addAddress() }} style={{ height: "2em", padding: ".3em" }}>OK</button>
                                    </> : null}
                                </div>
                                {props.data.address.map(elem => {

                                    return <Address
                                        data={elem}
                                        setUpdate={props.setUpdate}
                                        updatevalue={props.updatevalue}
                                    />
                                })}


                            </div>


                        </div>
                    </div>
                </div>


            </>
        )
    }


    return (
        modal()

    )
}