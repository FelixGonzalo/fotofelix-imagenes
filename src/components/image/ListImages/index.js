import React from 'react';
import {API_URL} from '../../../services/main/settings'

const ListImages = (props) => {
  return <section className="images">
      {
        props.images.map((image, index) => (
          <div className="images_item" key={index}>
            <img src={API_URL+ '/uploads/'+image?.imgUrl} alt="" className="images_item_img"/>
            <div className="images_item_information">
              <span className="images_item_client">{image.client?.firstname} {image.client?.lastname}</span>
              <span className="images_item_category">{image.category?.name}</span>
            </div>
          </div>
        ))
      }
  </section>
};

export default ListImages;
