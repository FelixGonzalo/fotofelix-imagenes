import React from 'react'

const ImageForm = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <select id="categoryId" name="categoryId" onChange={props.onChange}>
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
        onChange={props.onChangeFile}/>
      <button type="submit">Guardar</button>
    </form>
  )
}

export default ImageForm
