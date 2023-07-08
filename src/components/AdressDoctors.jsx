import React from "react";
import EditableInputComponentSchedules from "./EditableInputComponentSchedules";
import EditableInputComponent from "./EditableInputComponent";
import ItemEditableImput from "./ItemEditableImput";
import api from "../url/url";

function AdressDoctors(props) {
  console.log(props.address.id);

  // addresd function
  function upAddress(d) {
    const addres = d.split(",");
    const addressData = {
      city: addres[3],
      district: addres[2],
      street: `${addres[0]}, ${addres[1]}`,
    };

    const body = JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/manageaddress/${props.address.id}`, {
      method: `PUT`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
      body: JSON.stringify(addressData),
    }).then((data) => {});
  }

  function addAddress(d) {
    const addres = d.split(",");
    const addressData = {
      city: addres[3],
      district: addres[2],
      street: `${addres[0]}, ${addres[1]}`,
      doctorname: props.address.doctor_id,
    };

    const body = JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/manageaddress`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
      body: JSON.stringify(addressData),
    }).then((data) => {});
  }

  function deleteAddress() {
    const body = JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/manageaddress/${props.address.id}`, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
    }).then((data) => {});
  }

  // phones function
  function addPhone(d) {
    const phoneData = {
      phonenumber: d,
      address_id: props.address.id,
    };

    const body = JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/managephone`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
      body: JSON.stringify(phoneData),
    }).then((data) => {});
  }

  function deletePhone(phoneid) {
    const body = JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/managephone/${phoneid}`, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
    }).then((data) => {});
  }

  // email function
  function addEmail(d) {
    const phoneData = {
      email: d,
      address_id: props.address.id,
    };

    const body = JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/manageemail`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
      body: JSON.stringify(phoneData),
    }).then((data) => {});
  }

  function deleteEmail(phoneid) {
    const body = JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/manageemail/${phoneid}`, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
    }).then((data) => {});
  }

  // servicetimes function
  function addServicetime(d) {
    const servicetimeData = {
      day: d.day,
      schedules: d.schedules,
      address_id: props.address.id,
    };

    const body = JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/manageservicetime`, {
      method: `POST`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
      body: JSON.stringify(servicetimeData),
    }).then((data) => {});
  }

  function upServicetime(d) {
    console.log(props.address.id);

    const servicetimeData = {
      schedules: d.data,
      address_id: d.id,
    };

    console.log(servicetimeData);

    const body = JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/manageservicetime/${d.id}`, {
      method: `PUT`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
      body: JSON.stringify(servicetimeData),
    }).then((data) => {});
  }

  function deleteServicetime(phoneid) {
    const body = JSON.parse(sessionStorage.getItem("key"));

    fetch(`${api.URLAPI}/api/manageservicetime/${phoneid}`, {
      method: `DELETE`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${body.type} ${body.token}`,
      },
    }).then((data) => {});
  }

  console.log(props.address.servicetimes);
  return (
    <div style={{ marginBottom: "3em" }}>
      <EditableInputComponent
        title={`Endereço ${props.address.id}`}
        popoverTitle="Adicionar Endereço"
        hiddenAddMore={false}
        add={addAddress}
      >
        <ItemEditableImput
          type="text"
          value={`${props.address.street}, ${props.address.district}, ${props.address.city}`}
          add={upAddress}
          delete={deleteAddress}
          id={props.address.id}
        />
      </EditableInputComponent>

      <EditableInputComponent
        title="Telefone"
        hiddenAddMore={false}
        popoverTitle="Adicionar novo Telefone"
        add={addPhone}
      >
        {props.address.phones.map((elem) => {
          return (
            <ItemEditableImput
              type="tel"
              value={elem.phone}
              delete={deletePhone}
              id={elem.id}
            />
          );
        })}
      </EditableInputComponent>

      <EditableInputComponent
        title="E-mail"
        hiddenAddMore={false}
        popoverTitle="Adicionar novo E-mail"
        add={addEmail}
      >
        {props.address.emails.map((elem) => {
          return (
            <ItemEditableImput
              type="email"
              value={elem.email}
              delete={deleteEmail}
              id={elem.id}
            />
          );
        })}
      </EditableInputComponent>

      <EditableInputComponentSchedules
        title="Horarios"
        hiddenAddMore={false}
        popoverTitle="Adicionar novo Horario"
        add={addServicetime}
      >
        {props.address.servicetimes.map((elem) => {
          return (
            <ItemEditableImput
              type="text"
              value={` ${elem.day} ${elem.schedules}`}
              delete={deleteServicetime}
              add={upServicetime}
              id={elem.id}
            />
          );
        })}
      </EditableInputComponentSchedules>
    </div>
  );
}

export default AdressDoctors;
