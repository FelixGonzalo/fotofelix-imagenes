import React from 'react'

const CategoryForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="CategoryForm" autoComplete="off">
      <input
        type="text"
        name="name"
        id="name"
        maxlength="40"
        className="input-default"
        placeholder="Nombre de la categoría"
        onChange={props.onChange}
        value={props.formValues.name || ""}/>
      <button type="submit" className="btn-style-1">Guardar</button>
    </form>
  )
}

export default CategoryForm
