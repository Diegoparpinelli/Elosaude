import React from "react";

function GenderOption() {
  return (
    <div className="widget">
      <h5 className="widget-title">Sexo</h5>

      <input
        type="radio"
        name="gendorDoctor"
        defaultValue="nopreference"
        id="genderDoctor"
      />
      <label htmlFor="genderDoctor">Sem Preferência</label>

      <input
        type="radio"
        name="gendorDoctor"
        defaultValue="female"
        id="genderDoctor1"
      />
      <label htmlFor="genderDoctor1">Feminino</label>

      <input
        type="radio"
        name="gendorDoctor"
        defaultValue="male"
        id="genderDoctor2"
      />
      <label className="mb-0" htmlFor="genderDoctor2">
        Masculino
      </label>
    </div>
  );
}

export default GenderOption;
