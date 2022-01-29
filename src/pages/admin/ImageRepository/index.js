import React from 'react'
import './ImageRepository.scss'
import ListImages from '../../../components/image/ListImages';
import getImages from '../../../services/main/image/getImages'

const ImageRepository = () => {

  const [state, setState] = React.useState({
    loading: false,
    error: null,
    modal: false,
    images: [],
    createForm: {
      file: '',
    },
    editForm: {}
  })

  const fetchImages = () => {
    setState({ ...state, loading: true, error: null })
      getImages()
      .then(data => { setState({ ...state, loading: false, images: data }) })
      .catch(error => {
        console.log("Category list error", error)
        setState({ ...state, loading: false, error: error})
      })
  }

  return (
    <div className="App">
      <h1>Repositorio de imágenes</h1>
      <section className="menu">
        <button className="btn_getImages" onClick={fetchImages}>Obtener imagenes</button>
      </section>
      <ListImages
        images={state.images}
      />
    </div>
  )
}

export default ImageRepository
