import React from 'react';
import { useNavigate } from "react-router-dom";
import LoadingPage from '../../../components/loaders/LoadingPage';
import Modal from '../../../components/modals/Modal';
import CustomerForm from '../../../components/customer/CustomerForm';
import ListCustomers from '../../../components/customer/ListCustomers';
import CustomerFilter from '../../../components/customer/CustomerFilter';
import {getCustomersByFilter} from '../../../services/main/customer/getCustomers'
import addCustomer from '../../../services/main/customer/addCustomer'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './CustomerImageRepositoryFinder.scss'

const CustomerImageRepositoryFinder = () => {

  const MySwal = withReactContent(Swal)
  let navigate = useNavigate();

  const [state, setState] = React.useState({
    loading: false,
    error: null,
    modalCreateCustomer: false,
    customers: [],
    filterForm: {
      firstname: '',
      phone: '',
    },
    createCustomerForm: {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      dni: ''
    }
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
    if (!state.filterForm.firstname.trim() && !state.filterForm.phone.trim()) return
    if (state.filterForm.phone.length !== 9 && !state.filterForm.firstname.trim()) return
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

  // create customer

  const handleChangeCreateCustomer = (e) => {
    setState({
      ...state,
        createCustomerForm: {
        ...state.createCustomerForm,
        [e.target.name]: e.target.value,
      },
    })
  }

  const handleCreateCustomer = (e) => {
    e.preventDefault()
    if (!state.createCustomerForm.firstname.trim() || !state.createCustomerForm.phone.trim()) return

    if (state.createCustomerForm.phone.length !== 9) {
      MySwal.fire({
        text: 'El celular debe tener 9 números ',
        icon: 'info'
      })
      return
    }
    setState({ ...state, loading: true, error: null })
    addCustomer(state.createCustomerForm)
    .then(data => setState({
      ...state,
      loading: false,
      modalCreateCustomer: false,
      createCustomerForm: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        dni: ''
      },
      customers: [data]
    }))
    .catch(error => {
      setState({ ...state, loading: false, error: error})
      MySwal.fire({
        title: <strong>Error al guardar</strong>,
        text: 'Compruebe los datos y vuelva a intentarlo',
        icon: 'error'
      })
    })
  }

  const handleSwitchCreateCustomerModal = () => {
    setState({...state, modalCreateCustomer: !state.modalCreateCustomer})
  }

  return <main className="wrapper CustomerImageRepositoryFinder">
    <h1 className="title-default">Repositorio de Imágenes</h1>
    <CustomerFilter
      onChange={handleChangeFilter}
      onSubmit={handleFilter}
      formValues={state.filterForm}/>
    <div className="CustomerImageRepositoryFinder_buttons">
      <button type="button" className="btn-default" onClick={handleSwitchCreateCustomerModal}>Agregar cliente</button>
    </div>
    <ListCustomers
      customers={state.customers}
      onWatch={handleWatch}/>
    <Modal isOpen={state.modalCreateCustomer} onClose={handleSwitchCreateCustomerModal}>
      <h2>Agregar cliente</h2>
      <CustomerForm
        onChange={handleChangeCreateCustomer}
        onSubmit={handleCreateCustomer}
        formValues={state.createCustomerForm}/>
    </Modal>
    <LoadingPage isLoading={state.loading}/>
  </main>;
};

export default CustomerImageRepositoryFinder;
