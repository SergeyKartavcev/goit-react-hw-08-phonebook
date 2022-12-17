import { LoginForm } from '../components/LoginForm/LoginForm';
import { Box } from '@mui/material';

export default function Login() {
  return (
    <Box 
    sx={{ 
      mt: 30
    }}>
      <LoginForm />
    </Box>
  );
}
