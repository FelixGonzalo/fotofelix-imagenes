import React from 'react'

const CustomerFilter = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="CustomerFilter" autoComplete="off">
      <input
        type="text"
        name="firstname"
        id="firstname"
        className="input-default"
        placeholder="Nombre del cliente"
        onChange={props.onChange}
        value={props.formValues.firstname || ""}/>
      <input
        type="text"
        name="phone"
        id="phone"
        className="input-default"
        placeholder="Celular del cliente"
        onChange={props.onChange}
        value={props.formValues.phone || ""}/>
      <button type="submit" className="btn-style-1"><i className="fas fa-search"></i> Buscar</button>
    </form>
  )
}

export default CustomerFilter
