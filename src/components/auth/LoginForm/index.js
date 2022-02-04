import React from 'react'

const LoginForm = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="CategoryForm" autoComplete="off">
      <input
        type="text"
        name="user"
        id="user"
        maxLength="40"
        className="input-default"
        placeholder="Ingrese su Usuario"
        onChange={props.onChange}
        value={props.formValues.user || ""}/>
      <input
        type="text"
        name="password"
        id="password"
        maxLength="40"
        className="input-default"
        placeholder="Ingrese su password"
        onChange={props.onChange}
        value={props.formValues.password || ""}/>
      <button type="submit" className="btn-default">Login</button>
    </form>
  )
}

export default LoginForm