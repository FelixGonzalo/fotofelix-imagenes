import React from 'react';

const ListCustomers = (props) => {
  return <ul className="ListCustomers">
    {
      props.customers.map((customer, index) => (
        <li key={index+'customer'}>
          <p>
            {customer.firstname} {customer.lastname}
            <span><i className="fas fa-mobile-alt"></i> {customer.phone}</span>
          </p>
          {
            props.onDelete ? <button type="button" onClick={() => props.onDelete(customer.id)}>Eliminar</button>
            : ''
          }
          {
            props.onEdit ? <button type="button" onClick={() => props.onEdit(customer)}>Editar</button>
            : ''
          }
          {
            props.onWatch ? <button type="button" className="btn-default" onClick={() => props.onWatch(customer)}>Ver repositorio</button>
            : ''
          }
        </li>
      ))
    }
  </ul>;
};

export default ListCustomers;
