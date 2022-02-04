import React from 'react'
import { useNavigate  } from "react-router-dom";
import './Home.scss'
import logoFotoFelix from '../../assets/fotofelix_logo.png'
import LoginForm from '../../components/auth/LoginForm';
import login from '../../services/main/auth/login'

const Home = () => {

  let navigate = useNavigate();

  const [state, setState] = React.useState({
    loading: false,
    error: null,
    loginForm: {
      user: '',
      password: '',
    },
    tokenLogin: null
  })

  const handleLogin = (e) => {
    e.preventDefault()
    setState({ ...state, loading: true, error: null })
    login(state.loginForm)
    .then(data => {
      setState({
        ...state,
        loading: false,
        loginForm: {
          user: '',
          password: '',
        },
        tokenLogin: data
      })
      saveTokenOfLogin(data.accessToken)
      navigate(`/admin/buscador-de-repositorios`);
    })
    .catch(error => setState({ ...state, loading: false, error: error}))
  }

  const handleOnChangeLogin = (e) => {
    setState({
      ...state,
      loginForm: {
        ...state.loginForm,
        [e.target.name]: e.target.value,
      },
    })
  }

  const saveTokenOfLogin = (token) => {
    localStorage.setItem('accesToken', token)
  }

  return (
    <main className="wrapper Home">
      <img src={logoFotoFelix} alt="logo de Foto Felix" className="Home_logo" width="150px"/>
      <h1 className="Home_title">Repositorio de imágenes</h1>
      <LoginForm
        onSubmit={handleLogin}
        onChange={handleOnChangeLogin}
        formValues={state.loginForm}
        />
      {/* <Link to="/admin/buscador-de-repositorios" className="btn-default">Iniciar sesión</Link> */}
    </main>
  )
}

export default Home
