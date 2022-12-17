import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import {selectUserName} from '../../redux/auth/selectors'
import { useSelector } from 'react-redux';
import {Box, Typography, Button} from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  console.log(userName)
const handleLogOut = () => dispatch(logOut());
  return (
    <Box >
      <Typography variant="h6"
        align="center"
        sx={{
          fontWeight: 'light',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }} >Welcome, {userName}</Typography>
      <Button  color="secondary" variant="outlined" type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Box>
  );
};
