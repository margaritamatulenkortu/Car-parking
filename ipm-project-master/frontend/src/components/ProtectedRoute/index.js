import React, {useState} from 'react';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({path, component}) => {
  const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
  let [token, setToken] = useState(isLoggedIn);

  return token ? ( 
    <Route path={path} component={component} /> 
    ) :  (
      <Redirect to='/login' />
  )
}

export default ProtectedRoute;