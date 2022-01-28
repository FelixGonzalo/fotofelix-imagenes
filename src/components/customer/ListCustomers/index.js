import React from 'react';

const ListCustomers = (props) => {
  return <ul>
    {
      props.customers.map((customer, index) => (
        <li key={index+'customer'}>
          {customer.firstname} {customer.lastname} {customer.phone}
          <button type="button" onClick={() => props.onDelete(customer.id)}>Eliminar</button>
          <button type="button" onClick={() => props.onEdit(customer)}>Editar</button>
        </li>
      ))
    }
  </ul>;
};

export default ListCustomers;
