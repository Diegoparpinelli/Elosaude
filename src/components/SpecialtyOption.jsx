import React from "react";

function SpecialtyOption({specialist, update}) {
  const filter = JSON.parse(sessionStorage.getItem("queryDoctors"))

  function query(valor){
    const end = filter.filter( elem =>{
      if( elem.specialist.find(elem2 => elem2.specialist.toUpperCase() == valor.toUpperCase()) ){
        return elem
      }
    })

    sessionStorage.setItem("queryDoctors", JSON.stringify(end))
    update(end)
  }

  return (
    <li onClick={()=>{query(specialist)}}>
      <a >
        <i className="flaticon-teeth"></i>
        {specialist}
      </a>
    </li>
  );
}

export default SpecialtyOption;
