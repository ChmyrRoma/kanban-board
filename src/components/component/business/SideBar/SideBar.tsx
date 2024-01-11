import React from 'react';
import { Box, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { logOut } from '../../../../store/slices/user';

import styles from './SideBar.module.scss';

const routes = [
  { title: 'Events Page', path: '/events' },
  { title: 'Settings', path: '/settings' }
]

const SideBar = () => {
  const { userInfo } = useAppSelector(state => state.user)

  const dispatch = useAppDispatch();

  const handleLogOut = () => {
    dispatch(logOut())
  }

  return (
    <Box className={styles.sideBar}>
      <Box className={styles.sideBar__content}>
        <Box className={styles.sideBar__pageBlock}>
          {routes.map(el => (
            <Box key={el.title} className={styles.sideBar__component}>
              <NavLink
                to={el.path}
                className={({ isActive }) => isActive ? `${styles.sideBar__component_active}` : "" }
              >
                {el.title}
              </NavLink>
            </Box>
          ))}
        </Box>
        <Box>
          <Grid className={styles.sideBar__container}>
            <Grid className={styles.sideBar__avatar} />
            <Grid className={styles.sideBar__userInfo}>
              <Grid className={styles.sideBar__userInfo_name}>{userInfo?.role}</Grid>
              <Grid className={styles.sideBar__userInfo_email}>{userInfo?.email}</Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Box className={styles.sideBar__footer}>
        <Box className={styles.sideBar__footer_buttonContainer}>
          <button onClick={handleLogOut}>Logout</button>
        </Box>
      </Box>
    </Box>
  )
}

export default SideBar;
