import React from 'react'
import FormAddDoctor from '../../components/FormAddDoctor'
import HeaderDash from '../../components/HeaderDash'

function AddDoctor() {
  return (
    <>
      <HeaderDash>
        <FormAddDoctor
          pathMidle='Médicos'
          pathFinal='Adicionar Médicos'
        />
      </HeaderDash>
    </>
  )
}

export default AddDoctor