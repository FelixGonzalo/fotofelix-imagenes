import React from 'react';
import './Loading.scss'

const Loading = (props) => {
  if (!props.isLoading) {
    return null
  }
  return <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
};

export default Loading;
