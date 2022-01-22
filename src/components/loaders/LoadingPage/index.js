import React from 'react';
import ReactDOM from 'react-dom';
import './LoadingPage.scss'
import Loading from '../Loading';

const LoadingPage = (props) => {
  if (!props.isLoading) {
    return null
  }
  return ReactDOM.createPortal(
    <div className="LoadingPage">
      <Loading isLoading={props.isLoading}/>
    </div>,
    document.getElementById('loaders')
  );
};

export default LoadingPage;
