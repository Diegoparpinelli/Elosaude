import React, { useState } from "react";

import { Box } from "@chakra-ui/react";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function EditableInputComponent(props) {
  const [day, setDay] = useState("SEG");
  const [hora, setHora] = useState("");

  const popover = (
    <Popover id="popover-basic" style={{ maxWidth: "800px" }}>
      <Popover.Header as="h3">{props.popoverTitle}</Popover.Header>
      <Popover.Body>
        <form className="popover-details-doctor" style={{ Width: "800px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <select
              onChange={(e) => {
                setDay(e.target.value);
              }}
            >
              <option value={"SEG"}>Segunda-feira</option>
              <option value={"TER"}>Terça-feira</option>
              <option value={"QUA"}>Quarta-feira</option>
              <option value={"QUI"}>Quinta-feira</option>
              <option value={"SEX"}>Sexta-feira</option>
              <option value={"SAB"}>Sabado</option>
              <option value={"DOM"}>Domingo</option>
            </select>

            <input
              type="text"
              onChange={(e) => {
                setHora(e.target.value);
              }}
            />

            {/* <input type={"number"} min={0} max={23} defaultValue={0} onChange={e=>{setHoraa(e.target.value)}}/>
            <input type={"number"} min={0} max={59} defaultValue={0} onChange={e=>{setMina(e.target.value)}}/>

            <input type={"number"} min={0} max={23} defaultValue={0} onChange={e=>{setHorab(e.target.value)}}/>
            <input type={"number"} min={0} max={59} defaultValue={0} onChange={e=>{setMinb(e.target.value)}}/> */}
          </div>

          {/* <input required type="text" onChange={e=>{setData(e.target.value)}} placeholder={props.placeholder} /> */}
          <button
            type="submit"
            onClick={() => {
              props.add({ day: day, schedules: hora });
            }}
          >
            Enviar
          </button>
        </form>
      </Popover.Body>
    </Popover>
  );
  /* Here's a custom control */
  return (
    <Box display="flex" flexDirection="column">
      <div style={{ display: "flex" }}>
        <label className="label-doctor">{props.title}</label>
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <span hidden={props.hiddenAddMore} className="span-icon-detail">
            Adicionar
            <i className="fa fa-plus icon-details"></i>
          </span>
        </OverlayTrigger>
      </div>

      {props.children}
    </Box>
  );
}

export default EditableInputComponent;
