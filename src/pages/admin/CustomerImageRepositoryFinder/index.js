import React from 'react';
import { useNavigate } from "react-router-dom";
import LoadingPage from '../../../components/loaders/LoadingPage';
import ListCustomers from '../../../components/customer/ListCustomers';
import CustomerFilter from '../../../components/customer/CustomerFilter';
import {getCustomersByFilter} from '../../../services/main/customer/getCustomers'
import './CustomerImageRepositoryFinder.scss'

const CustomerImageRepositoryFinder = () => {

  let navigate = useNavigate();

  const [state, setState] = React.useState({
    loading: false,
    error: null,
    modal: false,
    customers: [],
    filterForm: {
      firstname: '',
      phone: '',
    },
  })

  const handleChangeFilter = (e) => {
    setState({
      ...state,
      filterForm: {
        ...state.filterForm,
        [e.target.name]: e.target.value,
      },
    })
  }

  const handleFilter = (e) => {
    e.preventDefault()

    setState({ ...state, loading: true, error: null })
    getCustomersByFilter(state.filterForm)
      .then(data => { setState({ ...state, loading: false, customers: data }) })
      .catch(error => {
        console.log("Customer list error", error)
        setState({ ...state, loading: false, error: error})
      })
  }

  const handleWatch = (customer) => {
    navigate("/admin/repositorio-de-imagenes-del-cliente/" + customer.id);
  }

  return <main className="wrapper CustomerImageRepositoryFinder">
    <h1 className="title-default">Repositorio de Imágenes</h1>
    <CustomerFilter
      onChange={handleChangeFilter}
      onSubmit={handleFilter}
      formValues={state.filterForm}/>
    <ListCustomers
      customers={state.customers}
      onWatch={handleWatch}/>
    <LoadingPage isLoading={state.loading}/>
  </main>;
};

export default CustomerImageRepositoryFinder;
