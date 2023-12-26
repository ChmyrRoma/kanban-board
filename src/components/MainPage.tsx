import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
     <Grid sx={{ textAlign: 'center', cursor: 'pointer' }}>
       <Link to="/sign-in" style={{ margin: '10px' }}>Sign In</Link>
       <Link to="/sign-up">Sign Up</Link>
     </Grid>
    </>
  )
}

export default MainPage;