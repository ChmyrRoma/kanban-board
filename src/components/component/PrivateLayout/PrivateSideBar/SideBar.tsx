import React from 'react';
import { Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import * as classNames from 'classnames';

import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { logOut } from '../../../../store/slices/user';

import styles from './SideBar.module.scss';

const routes = [
  { title: 'Main Page', url: '/mainPage' },
  { title: 'Settings', url: '/settings' }
]

const SideBar = () => {
  const { userInfo } = useAppSelector(state => state.user)

  const dispatch = useAppDispatch();
  const location = useLocation();

  const LogOut = async () => {
    const response = await dispatch(logOut())
  }

  return (
    <Grid className={styles.sideBar}>
      <Grid className={styles.sideBar__pageBlock}>
        {routes.map(el => (
          <Grid className={classNames({
            [styles.sideBar__component]: true,
            [styles.sideBar__component_active]: el.url === location.pathname
          })}
          >
            <Link to={el.url}>{el.title}</Link>
          </Grid>
        ))}
      </Grid>
      <Grid className={styles.sideBar__infoBlock}>
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
        <Grid className={styles.sideBar__infoBlock_button}>
          <button onClick={LogOut}>Log Out</button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SideBar;
