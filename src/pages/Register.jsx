import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import { Box, Typography } from '@mui/material';
export default function Register() {
  return (
    <Box sx={{ mt: 30 }}>
      <Typography>Registration</Typography>
      <RegisterForm />
    </Box>
  );
}
