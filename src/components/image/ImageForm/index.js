import React from 'react'

const ImageForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="ImageForm">
      <select id="categoryId" name="categoryId" className="select-default" onChange={props.onChange}>
        <option value="-1">Seleccciona la Categoría</option>
        {
          props.selectCategories.map((category) => (
            <option value={category.id} key={"category-"+category.id}>{category.name}</option>
          ))
        }
      </select>
      <label htmlFor="imgfile">Foto:</label>
      <input
        type="file"
        name="imgfile"
        id="imgfile"
        placeholder="Foto"
        className="input-default"
        onChange={props.onChangeFile}/>
      <button type="submit" className="btn-style-1">Guardar</button>
    </form>
  )
}

export default ImageForm
