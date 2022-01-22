import React from 'react';

const ListCategories = (props) => {
  return <ul>
    {
      props.categories.map((category, index) => (
        <li key={index+'category'}>
          {category.name}
          <button type="button" onClick={() => props.onDelete(category.id)}>Eliminar</button>
          <button type="button" onClick={() => props.onEdit(category)}>Editar</button>
        </li>
      ))
    }
  </ul>;
};

export default ListCategories;
