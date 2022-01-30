import React from 'react'
import { useParams } from "react-router-dom";
import LoadingPage from '../../../components/loaders/LoadingPage';
import Modal from '../../../components/modals/Modal';
import CustomerForm from '../../../components/customer/CustomerForm';
import ListImages from '../../../components/image/ListImages';
import ImageForm from '../../../components/image/ImageForm';
import {getImagesByCustomerId} from '../../../services/main/image/getImages'
import {getCustomerById} from '../../../services/main/customer/getCustomers'
import editCustomer from '../../../services/main/customer/editCustomer'
import getCategories from '../../../services/main/category/getCategories'
import addImage from '../../../services/main/image/addImage'
import deleteImage from '../../../services/main/image/deleteImage'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './CustomerImageRepository.scss'

const CustomerImageRepository = () => {

  const MySwal = withReactContent(Swal)
  const params = useParams();

  const [state, setState] = React.useState({
    loading: false,
    error: null,
    modal: false,
    modalAddImage: false,
    customer: {},
    images: [],
    categories: [],
    editForm: {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      dni: ''
    },
    addImageForm: {
      categoryId: '',
      clientId: '',
      imgfile: null,
      imgUrl: '',
    }
  })

  const fetchImagesByCustomerId = (CustomerId) => {
    setState({ ...state, loading: true, error: null })
      getImagesByCustomerId(CustomerId)
      .then(data => { setState({ ...state, loading: false, images: data }) })
      .catch(error => {
        console.log("Category list error", error)
        setState({ ...state, loading: false, error: error})
      })
  }

  function fetchCategories(){
    setState({ ...state, loading: true, error: null })
    getCategories()
      .then(data => {setState({ ...state, loading: false, categories: data, modalAddImage: true }) })
      .catch(error => {
        console.log("Category list error", error)
        setState({ ...state, loading: false, error: error})
      })
  }

  React.useEffect (() => {
    const FetchCustomer = (customerId) => {
      setState({ ...state, loading: true, error: null })
      getCustomerById(customerId)
      .then(data => {
        setState({
          ...state,
          loading: false,
          customer: data,
          addImageForm: {
            ...state.addImageForm,
            clientId: data.id
          }
        })
      })
      .catch(error => {
        console.log("Customer data error", error)
        setState({ ...state, loading: false, error: error})
      })
    }

    FetchCustomer(params.customerId)
    // fetchImagesByCustomerId(params.customerId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleEdit = async (e) => {
    e.preventDefault()

    if (!state.editForm.firstname.trim() || !state.editForm.phone.trim()) return

    if (state.editForm.phone.length !== 9) {
      MySwal.fire({
        text: 'El celular debe tener 9 números ',
        icon: 'info'
      })
      return
    }

    setState({ ...state, loading: true, error: null, editForm: state.customer })
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
        customer: data
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
    setState({...state, modal: !state.modal, editForm: state.customer})
  }


  const handleAddImage = async (e) => {
    e.preventDefault()
    if (!state.addImageForm.categoryId.trim()) return
    if (!state?.addImageForm?.imgfile) return

    setState({ ...state, loading: true, error: null })
    addImage(state.addImageForm)
    .then(data => {
      setState({
        ...state,
        loading: false,
        modalAddImage:false,
        addImageForm: {
          categoryId: '',
          clientId: '',
          imgfile: null,
          imgUrl: '',
        },
        images: [ data, ...state.images]
      })
    })
    .catch(error => {
      setState({ ...state, loading: false, error: error})
       MySwal.fire({
        title: <strong>Error al guardar</strong>,
        text: 'Compruebe los datos y vuelva a intentarlo',
        icon: 'error'
      })
    })
  }

  const handleChangeAddImage = e => {
    setState({
      ...state,
      addImageForm: {
        ...state.addImageForm,
        [e.target.name]: e.target.value,
      },
    })
  }

  const handleChangeAddImage_file = e => {
    setState({
      ...state,
      addImageForm: {
        ...state.addImageForm,
        imgfile:  e.target.files[0],
      },
    })
  }

  const handleSwitchAddImageModal = async (customer) => {
    if (state.categories.length > 0) {
      setState({...state, modalAddImage: !state.modalAddImage})
    } else {
      fetchCategories()
    }
  }

  const handleDeleteImage = (imageId) => {
     setState({ ...state, loading: true, error: null })
      deleteImage(imageId)
        .then(data => setState({
          ...state,
          loading: false,
          images: state.images.filter(image => image.id !== data.id)
        }))
        .catch(error => {
          setState({ ...state, loading: false, error: error})
          MySwal.fire({
            title: <strong>Error al eliminar</strong>,
            text: 'Vuelva a intentarlo',
            icon: 'error'
          })
        })
  }

  return (
    <main className="wrapper CustomerImageRepository">
      <h1 className="title-default">Repositorio de imágenes</h1>

      <section className="CustomerImageRepository_info">
        <ul className="CustomerImageRepository_customerInformation">
          <li className="CustomerImageRepository_customerInformation_title">Cliente</li>
          <li>
            <span><i className="fas fa-address-book"></i></span> {state?.customer?.firstname} {state?.customer?.lastname}
          </li>
          <li>
            <span><i className="fas fa-mobile-alt"></i></span> {state?.customer?.phone}
          </li>
          <li>
            <span><i className="fas fa-envelope"></i></span> {state?.customer?.email}
          </li>
          <li className="CustomerImageRepository_customerInformation_buttons">
            <button onClick={handleSwitchEditModal} className="btn-default"><i className="fas fa-user-edit"></i> Editar</button>
            <button onClick={handleSwitchAddImageModal} className="btn-default"><i className="fas fa-plus"></i> Agregar imagen</button>
            <button onClick={() => fetchImagesByCustomerId(state.customer.id)} className="btn-default"><i className="fas fa-images"></i> Mostrar imágenes</button>
          </li>
        </ul>

        <section className="CustomerImageRepository_listImages">
          <ListImages
            images={state.images}
            onDelete={handleDeleteImage}
          />
          {/* <button className="btn_getImages" onClick={() => fetchImagesByCustomerId(state.customer.id)}>Cargar imágenes</button> */}
        </section>
      </section>

      <Modal isOpen={state.modal} onClose={handleSwitchEditModal}>
        <h2>Editar Cliente</h2>
        <CustomerForm
          onChange={handleChangeEdit}
          onSubmit={handleEdit}
          formValues={state.editForm}/>
      </Modal>
      <Modal isOpen={state.modalAddImage} onClose={handleSwitchAddImageModal}>
        <h2>Agregar imagen</h2>
        <ImageForm
          selectCategories = {state.categories}
          onChangeFile={handleChangeAddImage_file}
          onChange={handleChangeAddImage}
          onSubmit={handleAddImage}/>
      </Modal>
      <LoadingPage isLoading={state.loading}/>
    </main>
  )
}

export default CustomerImageRepository
