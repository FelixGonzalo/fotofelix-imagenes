import React from 'react'

const CategoryForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Nombre de la categoría"
        onChange={props.onChange}
        value={props.formValues.name || ""}/>
      <button type="submit">Guardar</button>
    </form>
  )
}

export default CategoryForm
