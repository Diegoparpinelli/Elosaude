import React, {useState} from 'react'

function Search(props) {
  const [valor, setValor] = useState("")
  return (
    <div className="widget widget-search">
      <div className="input-group">
        <input type="text" name="search" placeholder="Pesquisar" onChange={e => {setValor(e.target.value)}} />
        <div className="input-group-append">
          <button type="button" onClick={() => {props.setDoctorsFiltered(valor)}}>
            <i className="fal fa-search me-0"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Search;
