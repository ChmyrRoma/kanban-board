import { Outlet } from 'react-router-dom';

import SideBar from './PrivateSideBar/SideBar';


const PrivateLayout = () => {
  return (
    <>
      <SideBar />
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default PrivateLayout;
