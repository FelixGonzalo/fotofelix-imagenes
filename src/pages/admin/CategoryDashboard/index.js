import React from 'react';
import LoadingPage from '../../../components/loaders/LoadingPage';
import Modal from '../../../components/modals/Modal';
import ListCategories from '../../../components/category/ListCategories';
import CategoryForm from '../../../components/category/CategoryForm'
import getCategories from '../../../services/main/category/getCategories'
import addCategory from '../../../services/main/category/addCategory'
import deleteCategory from '../../../services/main/category/deleteCategory'
import editCategory from '../../../services/main/category/editCategory'
import './CategoryDashboard.scss'


const CategoryDashboard = () => {

  const [state, setState] = React.useState({
    loading: false,
    error: null,
    modal: false,
    categories: [],
    createForm: {
      name: ''
    },
    editForm: {
      id: '',
      name: ''
    }
  })

  React.useEffect(() => {
    let ignore = false;
    function fetchCategories(){
      setState({ ...state, loading: true, error: null })
      getCategories()
        .then(data => { if (!ignore) setState({ ...state, loading: false, categories: data }) })
        .catch(error => {
          console.log("Category list error", error)
          if (!ignore) setState({ ...state, loading: false, error: error})
        })
    }
    fetchCategories()
    return () => { ignore = true; }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleCreate = async (e) => {
    e.preventDefault()
    setState({ ...state, loading: true, error: null })
    addCategory(state.createForm)
      .then(data => setState({
        ...state,
        loading: false,
        createForm: {name: ''},
        categories: [...state.categories, data]}))
      .catch(error => setState({ ...state, loading: false, error: error}))
  }

  const handleChangeCreate = e => {
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
    deleteCategory(id)
      .then(data => setState({
        ...state,
        loading: false,
        categories: state.categories.filter(category => category.id !== data.id)
      }))
      .catch(error => {
        setState({ ...state, loading: false, error: error})
      })
  }

  const handleEdit = async (e) => {
    e.preventDefault()
    setState({ ...state, loading: true, error: null })
    editCategory(state.editForm)
      .then(data => setState({
        ...state,
        loading: false,
        modal: false,
        editForm: {id:'', name: ''},
        categories: state.categories.map(category => {
          if (category.id === data.id) return data
          return category
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


  const handleSwitchEditModal = (category) => {
    setState({...state, modal: !state.modal, editForm: category})
  }

  return <main className="wrapper CategoryDashboard">
    <h1 className="title-default">Editar categorías</h1>
    <CategoryForm
      onChange={handleChangeCreate}
      onSubmit={handleCreate}
      formValues={state.createForm}/>
    <ListCategories
      categories={state.categories}
      onDelete={handleDelete}
      onEdit={handleSwitchEditModal}/>
    <Modal isOpen={state.modal} onClose={handleSwitchEditModal}>
      <h2>Editar Categoría</h2>
      <CategoryForm
        onChange={handleChangeEdit}
        onSubmit={handleEdit}
        formValues={state.editForm}/>
    </Modal>
    <LoadingPage isLoading={state.loading}/>
  </main>;
};

export default CategoryDashboard;