import React from 'react';
import { Link } from "react-router-dom";
import {API_URL} from '../../../services/main/settings'

const ListImages = (props) => {
  return <section className="images">
      {
        props.images.map((image, index) => (
          <div className="images_item" key={index}>
            <img src={API_URL+ '/uploads/'+image?.imgUrl} alt="" className="images_item_img"/>
            <div className="images_item_information">
              {/* <span className="images_item_client">{image.client?.firstname} {image.client?.lastname}</span> */}
              <span className="images_item_category">{image.category?.name}</span>

              <div className="images_item_buttons">
                {
                  props.onDelete ? <button className="btn-icon btn-icon-delete" onClick={() => props.onDelete(image.id)}><i className="fas fa-trash-alt"></i></button>
                  : ''
                }
                <a href={API_URL +  '/uploads/'+image?.imgUrl} className="btn-icon btn-icon-download" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-download"></i>
                </a>
              </div>
            </div>
          </div>
        ))
      }
  </section>
};

export default ListImages;
