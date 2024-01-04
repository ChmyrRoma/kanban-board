import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { logOut } from "../store/slices/user";

const MainPage = () => {
  const { isAuthorized } = useAppSelector(state => state.user)

  const dispatch = useAppDispatch();

  const LogOut = async () => {
    const response = await dispatch(logOut())
  }

  console.log('data', isAuthorized)
  return (
    <>
      <Grid sx={{ textAlign: 'center', cursor: 'pointer' }}>
        <Link to="/sign-in" style={{ margin: '10px' }}>Sign In</Link>
        <Link to="/sign-Up">Sign Up</Link>
        <Button onClick={LogOut}>Log Out</Button>
      </Grid>
    </>
  )
}

export default MainPage;