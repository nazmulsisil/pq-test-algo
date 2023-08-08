import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const navigate = useNavigate()
  const routeLocation = useLocation();
  const authenticated = localStorage.getItem('authenticated')
  const routePath = routeLocation.pathname;

  useEffect(() => {
    if (authenticated === 'false' || authenticated === null) {      
      const isRedirectToLogin = routePath !== '/links' && routePath !== '/settings' && routePath !== '/account' && routePath !== '/account/basic-profile';
      if (isRedirectToLogin) {
        return navigate(`${process.env.PUBLIC_URL}/login`);
      }
      return;
    }
  })
  return <>{<Outlet />}</>
}

export default PrivateRoutes
