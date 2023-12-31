import React from 'react';
import { Box, Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import * as classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { logOut } from '../../../../store/slices/user';

import styles from './SideBar.module.scss';

const routes = [
  { title: 'Main Page', url: '/events' },
  { title: 'Settings', url: '/settings' }
]

const SideBar = () => {
  const { userInfo } = useAppSelector(state => state.user)

  const dispatch = useAppDispatch();
  const location = useLocation();

  const handleLogOut = () => {
    dispatch(logOut())
  }

  return (
    <Box className={styles.sideBar}>
      <Box className={styles.sideBar__content}>
        <Box className={styles.sideBar__pageBlock}>
          {routes.map(el => (
            <Box className={classNames({
              [styles.sideBar__component]: true,
              [styles.sideBar__component_active]: el.url === location.pathname // TODO: check react router dom -> Link and fix it
            })}
            >
              <Link to={el.url}>{el.title}</Link>
            </Box>
          ))}
        </Box>
        <Box className={styles.sideBar__infoBlock}>
          { userInfo.map(elem => (
            <Grid className={styles.sideBar__container}>
              <Grid className={styles.sideBar__avatar} />
              <Grid className={styles.sideBar__userInfo}>
                <Grid className={styles.sideBar__userInfo_name}>{elem.role}</Grid>
                <Grid className={styles.sideBar__userInfo_email}>{elem.email}</Grid>
              </Grid>
            </Grid>
          )) }
          <div className={styles.inline} />
        
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
