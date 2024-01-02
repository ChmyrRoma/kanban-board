import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';


const PrivateProvider = () => {
  const { isAuthorized } = useAppSelector(state => state.user);
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/sign-in')
    }
  }, [isAuthorized])

  return <Outlet />
}

export default PrivateProvider;
