import React from 'react';
import LoadingPage from '../../../components/loaders/LoadingPage';
import ListCustomers from '../../../components/customer/ListCustomers';
import CustomerForm from '../../../components/customer/CustomerForm';
import Modal from '../../../components/modals/Modal';
import getCustomers from '../../../services/main/customer/getCustomers'
import addCustomer from '../../../services/main/customer/addCustomer'
import deleteCustomer from '../../../services/main/customer/deleteCustomer'
import editCustomer from '../../../services/main/customer/editCustomer'

const CustomerDashboard = () => {

  const [state, setState] = React.useState({
    loading: false,
    error: null,
    modal: false,
    customers: [],
    createForm: {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      dni: ''
    },
    editForm: {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      dni: ''
    }
  })

  React.useEffect(() => {
    let ignore = false;
    function fetchCustomers(){
      setState({ ...state, loading: true, error: null })
      getCustomers()
        .then(data => { if (!ignore) setState({ ...state, loading: false, customers: data }) })
        .catch(error => {
          console.log("Customer list error", error)
          if (!ignore) setState({ ...state, loading: false, error: error})
        })
    }
    fetchCustomers()
    return () => { ignore = true; }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCreate = (e) => {
    e.preventDefault()
    setState({ ...state, loading: true, error: null })
    addCustomer(state.createForm)
    .then(data => setState({
      ...state,
      loading: false,
      form: {
        firstname: '',
        lastname: '',
        phone: '',
        email: '',
        dni: ''
      },
      customers: [...state.customers, data]
    }))
    .catch(error => setState({ ...state, loading: false, error: error}))
  }

  const handleChangeCreate = (e) => {
    setState({
      ...state,
      createForm: {
        ...state.createForm,
        [e.target.name]: e.target.value,
      },
    })
  }

  const handleDelete = async (id) => {
    setState({ ...state, loading: true, error: null })
    deleteCustomer(id)
      .then(data => setState({
        ...state,
        loading: false,
        customers: state.customers.filter(customer => customer.id !== data.id)
      }))
      .catch(error => setState({ ...state, loading: false, error: error}))
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    setState({ ...state, loading: true, error: null })
    editCustomer(state.editForm)
      .then(data => setState({
        ...state,
        loading: false,
        modal: false,
        editForm: {
          id:'',
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          dni: ''
        },
        customers: state.customers.map(customer => {
          if (customer.id === data.id) return data
          return customer
        })
      }))
      .catch(error => setState({ ...state, loading: false, error: error}))
  }

  const handleChangeEdit = e => {
    setState({
      ...state,
      editForm: {
        ...state.editForm,
        [e.target.name]: e.target.value,
      },
    })
  }

  const handleSwitchEditModal = (customer) => {
    setState({...state, modal: !state.modal, editForm: customer})
  }

  return <main>
    <h2>Editar clientes</h2>
    <CustomerForm
      onChange={handleChangeCreate}
      onSubmit={handleCreate}
      formValues={state.createForm}/>
    <ListCustomers
      customers={state.customers}
      onDelete={handleDelete}
      onEdit={handleSwitchEditModal}
      />
    <Modal isOpen={state.modal} onClose={handleSwitchEditModal}>
      <h2>Editar Categoría</h2>
      <CustomerForm
        onChange={handleChangeEdit}
        onSubmit={handleEdit}
        formValues={state.editForm}/>
    </Modal>
    <LoadingPage isLoading={state.loading}/>
  </main>;
};

export default CustomerDashboard;
