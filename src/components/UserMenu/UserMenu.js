import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import {selectUserName} from '../../redux/auth/selectors'
import { useSelector } from 'react-redux';
import {Box, Typography, Button} from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
 
const handleLogOut = () => dispatch(logOut());
  return (
    <Box     display="flex" >
      <Typography variant="h6"
        align="center"
        ml={20}
        sx={{
          fontWeight: 'light',
          boxShadow: 1,
          borderRadius: 2,
          p: 1,
          minWidth: 200,
          bgcolor: 'warning.light' 
        }} >Welcome, {userName}</Typography>
      <Button  color="secondary" variant="outlined"  type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Box>
  );
};
