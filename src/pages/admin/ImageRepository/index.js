import React from 'react'
import './ImageRepository.scss'
import logo from '../../../assets/fotofelix_logo.png';

const ImageRepository = () => {

  const [images, setImages] = React.useState([])

  const getImages = async () => {
    try {
      let myHeaders = new Headers();
      myHeaders.append('Content-Type','text/plain; charset=UTF-8');
      const res = await fetch( 'http://34.71.59.77/images', {
        method: 'GET',
        mode: 'cors',
        headers: myHeaders
      });
      const data = await res.json()
      console.log('data', data)
      setImages(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  React.useEffect(() => {
    // getImages()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Repositorio de imágenes</h1>
      </header>
      <section className="menu">
        <button className="btn_getImages" onClick={getImages}>Obtener imagenes</button>
      </section>
      <section className="images">
        {
            images.map((image, index) => (
            <div className="images_item" key={index}>
              <img src={image.imgUrl} alt="" className="images_item_img"/>
              <div className="images_item_information">
                <span className="images_item_client">{image.client.firstname} {image.client.lastname}</span>
                <span className="images_item_category">{image.category.name}</span>
              </div>
            </div>
          ))
        }
      </section>
      <footer className="footer">
        <span><b>Integrantes:</b></span>
        <ul>
          <li>Ascencio Gómez Gino</li>
          <li>Borja Li Patrick</li>
          <li>Castro Cubas Félix</li>
          <li>Obregón Morales Luis</li>
        </ul>
      </footer>
    </div>
  )
}

export default ImageRepository
