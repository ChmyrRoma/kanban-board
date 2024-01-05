import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <Box sx={{ textAlign: 'center' }}>
      <p style={{ fontSize: 'xxx-large' }}>404</p>
      <div><h3>Page not Found</h3></div>
      <Link to="/sign-in" sx={{ cursor: 'pointer' }}><h4>Go back home</h4></Link>
    </Box>
  )
}
