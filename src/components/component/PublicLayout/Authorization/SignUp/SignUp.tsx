import React from 'react';
import { Button, Checkbox, FormControlLabel, Grid, Input } from '@mui/material';

import styles from './SignUp.module.scss';


const SignUp = () => {
  return (
    <Grid className={styles['signUpPage']}>
      <Grid className={styles['signUpPage__title']}>
        Sign Up
      </Grid>
      <Grid className={styles['signUpPage__container']}>
        <Grid className={styles['signUpPage__container_email']}>
          <Input type="email" placeholder="Enter your email" />
        </Grid>
        <Grid className={styles['signUpPage__container_password']}>
          <Input type="password" placeholder="Enter you password" />
        </Grid>
        <Grid className={styles['signUpPage__container_password']}>
          <Input type="password" placeholder="Enter you password again" />
        </Grid>
        <Grid>
          <FormControlLabel control={<Checkbox />} label="remember me" />
        </Grid>
        <Grid className={styles['signUpPage__container_button']}>
          <Button variant="contained">Sign Up</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SignUp
