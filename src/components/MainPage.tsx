import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { useAppSelector } from "../store/hooks";

const MainPage = () => {
  const { isAuthorized } = useAppSelector(state => state.user)

  console.log('data', isAuthorized)
  return (
    <>
      <Grid sx={{ textAlign: 'center', cursor: 'pointer' }}>
        <Link to="/sign-in" style={{ margin: '10px' }}>Sign In</Link>
        <Link to="/sign-Up">Sign Up</Link>
      </Grid>
    </>
  )
}

export default MainPage;