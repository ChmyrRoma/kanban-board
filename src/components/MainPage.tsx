import { Grid } from '@mui/material';

import PublicLayout from "./component/PublicLayout/PublicLayout";
import PrivateLayout from "./component/PrivateLayout/PrivateLayout";
import {Link} from "react-router-dom";

const MainPage = () => {
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