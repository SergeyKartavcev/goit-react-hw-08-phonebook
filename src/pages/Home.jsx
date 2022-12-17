import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from '../redux/auth/selectors';


const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUserName);
  return (
    <Box
    textAlign={'center'}
    mt={30}
    borderRadius={5}
    sx={{
      fontWeight: 'light',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
      minWidth: 300,
      bgcolor: 'success.light'
    }}
    >
      
      <Typography
      alignItems={'center'}
        variant="h2"
        color="accent "
        fontWeight="fontWeightBold"
        mb={4}
      >
        Wellcome to your private Phonebook!
      </Typography>
      <Typography
        variant="h2"
        component="h1"
        color="secondary"
        fontWeight="fontWeightBold"
        mb={4}
      >
        {isLoggedIn
          ? `${user}, it is bast app to keep your contacts`
          : 'To enter, please log in or register'}
      </Typography>
    </Box>
  );
};

export default Home;
