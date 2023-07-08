import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";

function Select(props) {
  return (
    <div className="select-editable">
      <label className="label-doctor">{props.title}</label>
      <ChevronDownIcon />
      <select name="" id="">
        <option value=""></option>
        {props.children}
      </select>
    </div>
  );
}

export default Select;
