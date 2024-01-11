import { Outlet } from 'react-router-dom';

import SideBar from '../../component/business/SideBar/SideBar';

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