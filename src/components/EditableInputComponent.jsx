import React, { useState } from "react";

import { Box } from "@chakra-ui/react";

import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

function EditableInputComponent(props) {
  const [data, setData] = useState();

  const popover = (
    <Popover id="popover-basic" style={{ maxWidth: "800px" }}>
      <Popover.Header as="h3">{props.popoverTitle}</Popover.Header>
      <Popover.Body>
        <form className="popover-details-doctor" style={{ Width: "800px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <input
              type="text"
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            onClick={() => {
              props.add(data);
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
