import React from 'react';

const ListCategories = (props) => {
  return <ul className="ListCategories">
    {
      props.categories.map((category, index) => (
        <li key={index+'category'}  className="ListCategories_item">
          <p className="ListCategories_item_name">{category.name}</p>
          <div className="ListCategories_item_buttons">
            <button type="button" className="btn-default ListCategories_btn-delete" onClick={() => props.onDelete(category.id)}>Eliminar</button>
            <button type="button" className="btn-default ListCategories_btn-edit" onClick={() => props.onEdit(category)}>Editar</button>
          </div>
        </li>
      ))
    }
  </ul>;
};

export default ListCategories;
