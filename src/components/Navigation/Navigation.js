import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import { Typography, List } from '@mui/material';



export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const activLink = ({ isActive }) => ({ color: isActive ? 'red' : 'black' });
  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <NavLink style={activLink} to="/">
        <Typography mr={5} variant="h6">
          Home
        </Typography>
      </NavLink>
      {isLoggedIn && (
        <NavLink style={activLink} to="/contacts">
          <Typography mr={100} variant="h6" >
            Contacts
          </Typography>
        </NavLink>
      )}
    </List>
  );
};
