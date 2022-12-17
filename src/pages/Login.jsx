import { LoginForm } from '../components/LoginForm/LoginForm';
import { Box, Typography } from '@mui/material';

export default function Login() {
  return (
    <Box sx={{ mt: 30 }}>
      <Typography>Login</Typography>

      <LoginForm />
    </Box>
  );
}
