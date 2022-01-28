import React from 'react'

const CustomerForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="firstname">Nombres:</label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Nombres del cliente"
        onChange={props.onChange}
        value={props.formValues.firstname || ""}/>
      <label htmlFor="lastname">Apellidos:</label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Apellidos del cliente"
        onChange={props.onChange}
        value={props.formValues.lastname || ""}/>
      <label htmlFor="phone">Celular:</label>
      <input
        type="text"
        name="phone"
        id="phone"
        placeholder="Celular del cliente"
        onChange={props.onChange}
        value={props.formValues.phone || ""}/>
      <label htmlFor="email">Correo:</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Correo del cliente"
        onChange={props.onChange}
        value={props.formValues.email || ""}/>
      <label htmlFor="dni">DNI:</label>
      <input
        type="text"
        name="dni"
        id="dni"
        placeholder="DNI del cliente"
        onChange={props.onChange}
        value={props.formValues.dni || ""}/>
      <button type="submit">Guardar</button>
    </form>
  )
}

export default CustomerForm
