import React from 'react'

const CustomerForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="CustomerForm" autoComplete="off">
      <label htmlFor="firstname">*Nombres:</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        maxLength="40"
        className="input-default"
        placeholder="Nombres del cliente"
        onChange={props.onChange}
        value={props.formValues.firstname || ""}/>
      <label htmlFor="lastname">Apellidos:</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        maxLength="40"
        className="input-default"
        placeholder="Apellidos del cliente"
        onChange={props.onChange}
        value={props.formValues.lastname || ""}/>
      <label htmlFor="phone">*Celular:</label>
      <input
        type="text"
        name="phone"
        id="phone"
        maxLength="9"
        className="input-default"
        placeholder="Celular del cliente"
        onChange={props.onChange}
        value={props.formValues.phone || ""}/>
      <label htmlFor="email">Correo:</label>
      <input
        type="email"
        name="email"
        id="email"
        maxLength="70"
        className="input-default"
        placeholder="Correo del cliente"
        onChange={props.onChange}
        value={props.formValues.email || ""}/>
      <label htmlFor="dni">DNI:</label>
      <input
        type="text"
        name="dni"
        id="dni"
        maxLength="8"
        className="input-default"
        placeholder="DNI del cliente"
        onChange={props.onChange}
        value={props.formValues.dni || ""}/>
      <button type="submit" className="btn-style-1">Guardar</button>
    </form>
  )
}

export default CustomerForm
