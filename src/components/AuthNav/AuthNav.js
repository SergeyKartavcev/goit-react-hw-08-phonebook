import { NavLink } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

export const AuthNav = () => {
  const activLink = ({ isActive }) => ({ color: isActive ? 'red' : 'black' });

  return (
    <Box ml={130} display="flex">
      <NavLink style={activLink} to="/contacts">
        <Typography mr={3} variant="h6" >
          Phonebook
        </Typography>
      </NavLink>
      <NavLink style={activLink} to="/register">
        <Typography mr={3} variant="h6" >
          Register
        </Typography>
      </NavLink>
      <NavLink style={activLink} to="/login">
        <Typography mr={5} variant="h6" >
          LogIn{' '}
        </Typography>
      </NavLink>
    </Box>
  );
};
