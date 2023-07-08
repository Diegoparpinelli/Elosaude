

export default function SearchSpecialist(props) {


    return (
        <>
            <label>Todas Serviço Referência</label>
            <input type="text" placeholder='Buscar' onChange={e => { props.filterSpecialists(e.target.value) }} />
            <ul style={{ overflow: 'auto', maxHeight: "10em" }}>
                {props.specialists.map((elem, index) => {
                    return <>
                        <li className="ms-list-item ps-0">
                            <label className="ms-checkbox-wrap">
                                <input type="checkbox" name="radioExample" value={elem.id} />
                                <i className="ms-checkbox-check"></i>
                            </label>
                            <span>{elem.specialist}</span>
                        </li>
                    </>
                })}



            </ul>
            <button className="btn btn-primary mt-4 d-inline w-20">adicionar</button>
        </>
    )
}