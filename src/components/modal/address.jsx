import { Center } from '@chakra-ui/react'
import { useState } from 'react'
import api from "../../url/url"
export default function Address(props) {

    console.log(props.data)

    const [show, setShow] = useState(false)
    const [showEdit, setShowEdit] = useState(false)
    const [address, setAddress] = useState(`${props.data.street}, ${props.data.district}, ${props.data.city}`)
    const [email, setEmail] = useState()
    const [phone, setPhone] = useState()
    const [schedules, setSchedules] = useState()
    const [day, setDay] = useState("SEG")

    // address functions
    function deleteAddress() {

        const body = JSON.parse(sessionStorage.getItem("key"))

        fetch(`${api.URLAPI}/api/manageaddress/${props.data.id}`,
            { method: `DELETE`, headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` } })
            .then(data => { props.setUpdate(!props.updatevalue) })
    }

    function upDateAddress(d) {
        const addres = d.split(',')
        const addressData = {
            city: addres[3],
            district: addres[2],
            street: `${addres[0]}, ${addres[1]}`,
        }

        const body = JSON.parse(sessionStorage.getItem("key"))

        fetch(`${api.URLAPI}/api/manageaddress/${props.data.id}`,
            { method: `PUT`, headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` }, body: JSON.stringify(addressData) })
            .then(data => { props.setUpdate(!props.updatevalue) })
    }

    //email functions

    function addEmail(d) {

        const emailData = {
            email: d,
            address_id: props.data.id
        }

        const body = JSON.parse(sessionStorage.getItem("key"))

        fetch(`${api.URLAPI}/api/manageemail`,
            { method: `POST`, headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` }, body: JSON.stringify(emailData) })
            .then(data => { props.setUpdate(!props.updatevalue) })
    }

    function deleteEmail(d) {

        const body = JSON.parse(sessionStorage.getItem("key"))

        fetch(`${api.URLAPI}/api/manageemail/${d}`,
            { method: `DELETE`, headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` } })
            .then(data => { props.setUpdate(!props.updatevalue) })
    }


    //phone functions

    function addPhone(d) {

        const emailData = {
            phonenumber: d,
            address_id: props.data.id
        }

        const body = JSON.parse(sessionStorage.getItem("key"))

        fetch(`${api.URLAPI}/api/managephone`,
            { method: `POST`, headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` }, body: JSON.stringify(emailData) })
            .then(data => { props.setUpdate(!props.updatevalue) })
    }

    function deletePhone(d) {

        const body = JSON.parse(sessionStorage.getItem("key"))

        fetch(`${api.URLAPI}/api/managephone/${d}`,
            { method: `DELETE`, headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` } })
            .then(data => { props.setUpdate(!props.updatevalue) })
    }


    //schedules functions

    function addSchedules(d, s) {

        const scheduleData = {
            day: d,
            schedules: s,
            address_id: props.data.id
        }

        const body = JSON.parse(sessionStorage.getItem("key"))

        fetch(`${api.URLAPI}/api/manageservicetime`,
            { method: `POST`, headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` }, body: JSON.stringify(scheduleData) })
            .then(data => { props.setUpdate(!props.updatevalue) })
    }

    function deleteSchedules(d) {

        const body = JSON.parse(sessionStorage.getItem("key"))

        fetch(`${api.URLAPI}/api/manageservicetime/${d}`,
            { method: `DELETE`, headers: { "Content-Type": "application/json", "Authorization": `${body.type} ${body.token}` } })
            .then(data => { props.setUpdate(!props.updatevalue) })
    }


    return (
        <>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <h2 onClick={() => { setShow(!show) }} style={{ fontSize: "1em", marginBottom: 0, cursor: "pointer", width: "max-content" }}>{`${props.data.street}, ${props.data.district}, ${props.data.city}`}</h2>

                {show ? <>
                    <div style={{ display: "flex", flexDirection: "row", marginBottom: "1em" }}>
                        <small onClick={() => { setShowEdit(!showEdit) }} style={{ marginRight: ".5em", cursor: "pointer" }}>editar</small>
                        <small onClick={() => { deleteAddress() }} style={{ marginRight: ".5em", cursor: "pointer" }}>remover</small>
                    </div>

                    <div style={{ display: "flex", flexDirection: "row" }}>
                        {showEdit ? <>
                            <input type="text" defaultValue={`${props.data.street}, ${props.data.district}, ${props.data.city}`} style={{ marginBottom: "1em", height: "2em", width: "20em" }} onChange={e => {
                                setAddress(e.target.value)
                            }} />
                            <button style={{ height: "2em", padding: ".3em" }} onClick={() => { upDateAddress(address) }}>OK</button>
                        </> : null}
                    </div>

                    <h3 style={{ fontSize: ".9em" }}>Emails</h3>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <input type="text" style={{ marginBottom: "1em", height: "2em", width: "20em" }} onChange={e => { setEmail(e.target.value) }} />
                        <button style={{ height: "2em", padding: ".3em" }} onClick={() => { addEmail(email) }}>ADD</button>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, marginTop: 0, marginBottom: "2em" }}>
                        {props.data.emails.map(elem => {
                            return <div style={{ display: "flex", flexDirection: "row" }}>
                                <li>{elem.email}</li>
                                <button style={{ height: "max-content", width: "1.8em", padding: "0", marginLeft: "1em", backgroundColor: "red", borderRadius: "20%" }} onClick={() => { deleteEmail(elem.id) }}>X</button>
                            </div>
                        })}

                    </ul>

                    <h3 style={{ fontSize: ".9em" }}>Telefones</h3>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <input type="text" style={{ marginBottom: "1em", height: "2em", width: "20em" }} onChange={e => { setPhone(e.target.value) }} />
                        <button style={{ height: "2em", padding: ".3em" }} onClick={() => { addPhone(phone) }}>ADD</button>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, marginTop: 0, marginBottom: "2em" }}>
                        {props.data.phones.map(elem => {
                            return <div style={{ display: "flex", flexDirection: "row", width: "max-content" }}>
                                <li>{elem.phone}</li>
                                <button style={{ height: "max-content", width: "1.8em", padding: "0", marginLeft: "1em", backgroundColor: "red", borderRadius: "20%" }} onClick={() => { deletePhone(elem.id) }}>X</button>
                            </div>
                        })}

                    </ul>

                    <h3 style={{ fontSize: ".9em" }}>Horarios</h3>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                        <select style={{ marginBottom: "1em", width: "8em", padding: ".1em", paddingLeft: ".5em", height: "2em" }} onChange={e => { setDay(e.target.value) }}>
                            <option value={"SEG"}>Segunda-Feira</option>
                            <option value={"TER"}>Terça-Feira</option>
                            <option value={"QUA"}>Quarta-Feira</option>
                            <option value={"QUI"}>Quinta-Feira</option>
                            <option value={"SEX"}>Sexta-Feira</option>
                            <option value={"SAB"}>Sábado</option>
                            <option value={"DOM"}>Domingo</option>
                        </select>
                        <input type="text" style={{ marginBottom: "1em", height: "2em", width: "20em" }} onChange={e => { setSchedules(e.target.value) }} />
                        <button style={{ height: "2em", padding: ".3em" }} onClick={() => { schedules != "" ? addSchedules(day, schedules) : null }}>ADD</button>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, marginTop: 0, marginBottom: "2em" }}>

                        {props.data.servicetimes.map(elem => {
                            return <div style={{ display: "flex", flexDirection: "row", width: "max-content", margin: ".5em" }}>
                                <li>{`${elem.day} ${elem.schedules}`}</li>
                                <button style={{ height: "max-content", width: "1.8em", padding: "0", marginLeft: "1em", backgroundColor: "red", borderRadius: "20%" }} onClick={() => { deleteSchedules(elem.id) }}>X</button>
                            </div>
                        })}

                        {/* <div style={{display: "flex", flexDirection: "row"}}>
                        <li>TER: 7:30 - 11:30, 13:00 - 17:45</li>
                        <button>X</button>
                    </div> */}

                    </ul> </> : null}

            </div>
        </>

    )
}