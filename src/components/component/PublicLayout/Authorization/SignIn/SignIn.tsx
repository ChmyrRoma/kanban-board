import React, { useState } from 'react';
import { Button, Grid, Input } from '@mui/material';
import { useAppDispatch } from '../../../../../store/hooks';
import { login } from '../../../../../store/slices/user';

import styles from './SignIn.module.scss';

const SignIn = () => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const dispatch = useAppDispatch()

  const onSubmit = async () => {
    const result = await dispatch(login({ email: userEmail, password: userPassword }))
  }

  return (
    <Grid className={styles['loginPage']}>
      <Grid className={styles['loginPage__title']}>
        Sign In
      </Grid>
      <Grid className={styles['loginPage__container']}>
        <Grid className={styles['loginPage__container_email']}>
          <Input type="email" placeholder="Enter your email" onChange={(e) => setUserEmail(e.target.value)} />
        </Grid>
        <Grid className={styles['loginPage__container_password']}>
          <Input type="password" placeholder="Enter you password" onChange={(e) => setUserPassword(e.target.value)}/>
        </Grid>
        <Grid className={styles['loginPage__container_button']}>
          <Button variant="contained" onClick={onSubmit}>Login</Button>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SignIn
