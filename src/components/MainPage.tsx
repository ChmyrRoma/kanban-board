import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import PublicLayout from "./component/PublicLayout/PublicLayout";
import PrivateLayout from "./component/PrivateLayout/PrivateLayout";
import { useAppSelector } from "../store/hooks";

const MainPage = () => {
  const { userInfo } = useAppSelector(state => state.user)

  console.log('data', userInfo)
  return (
    <>
      <Grid sx={{ textAlign: 'center', cursor: 'pointer' }}>

        <PublicLayout />
        <Link to="/sign-in" style={{ margin: '10px' }}>Sign In</Link>
        <Link to="/sign-Up">Sign Up</Link>
      </Grid>
      <Grid>
        <PrivateLayout />
      </Grid>
    </>
  )
}

export default MainPage;