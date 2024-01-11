import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import * as classNames from 'classnames';

import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { logOut } from '../../../../store/slices/user';

import styles from './SideBar.module.scss';

const routes = [
  { title: 'Events Page', path: '/events', icon: <MenuIcon /> },
  { title: 'Settings', path: '/settings', icon: <SettingsIcon /> }
]

const SideBar = () => {
  const [isCollapse, setIsCollapse] = useState(false);
  const { userInfo } = useAppSelector(state => state.user);

  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut())
  }

  const handleCollapse = () => setIsCollapse(!isCollapse);


  return (
    <Box className={classNames({ [styles.sideBar]: true, [styles.sideBar__collapse]: isCollapse })}>
      <Box className={styles.sideBar__content}>
        <Box className={styles.sideBar__pageBlock}>
          <Box className={styles.sideBar__collapse_buttonBlock}>
            {!isCollapse ? (
              <FirstPageIcon fontSize="medium" className={styles.sideBar__collapse_button} onClick={handleCollapse} />
            ) : (
              <LastPageIcon fontSize="medium" className={styles.sideBar__collapse_button} onClick={handleCollapse} />
            )}
          </Box>
          {routes.map(el => (
            <Box key={el.title} className={styles.sideBar__component}>
              <NavLink
                to={el.path}
                className={({ isActive }) => isActive ? `${styles.sideBar__component_active}` : "" }
              >
                {!isCollapse ? el.title : el.icon}
              </NavLink>
            </Box>
          ))}
        </Box>
        <Box>
          {!isCollapse ? (
            <Box className={styles.sideBar__container}>
              <Grid className={styles.sideBar__avatar} />
              <Grid className={styles.sideBar__userInfo}>
                <Grid className={styles.sideBar__userInfo_name}>{userInfo?.role}</Grid>
                <Grid className={styles.sideBar__userInfo_email}>{userInfo?.email}</Grid>
              </Grid>
            </Box>
          ) : (
            <Box className={styles.sideBar__collapse_userInfo}>
              <Grid className={styles.sideBar__avatar} />
            </Box>
          )}
        </Box>
      </Box>

      <Box className={styles.sideBar__footer}>
        <Box className={styles.sideBar__footer_button}>
          <button onClick={handleLogOut}>Logout</button>
        </Box>
      </Box>
    </Box>
  )
}

export default SideBar;
