import React from 'react';
import {Button, Grid, Input} from '@mui/material';

import styles from './SignIn.module.scss';

const SignIn = () => {
  return (
    <Grid className={styles['loginPage']}>
      <Grid className={styles['loginPage__title']}>
        Sign In
      </Grid>
      <Grid className={styles['loginPage__container']}>
        <Grid className={styles['loginPage__container_email']}>
          <Input type="email" placeholder="Enter your email" />
        </Grid>
        <Grid className={styles['loginPage__container_password']}>
          <Input type="password" placeholder="Enter you password" />
        </Grid>
        <Grid className={styles['loginPage__container_button']}>
          <Button variant="contained">Login</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SignIn
