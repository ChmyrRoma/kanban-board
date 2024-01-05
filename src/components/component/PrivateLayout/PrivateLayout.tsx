import { Outlet } from 'react-router-dom';

import SideBar from './PrivateSideBar/SideBar';

import styles from './PrivateLayout.module.scss';

const PrivateLayout = () => {
  return (
    <div className={styles.privateLayout}>
      <SideBar />
      <div className={styles.privateLayout__content}>
        <Outlet />
      </div>
    </div>
  )
}

export default PrivateLayout;
