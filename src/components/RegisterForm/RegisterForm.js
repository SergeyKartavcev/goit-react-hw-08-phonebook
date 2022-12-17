import { registerForm } from '../../redux/auth/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectAuthError, selectIsLoggedIn } from '../../redux/auth/selectors';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import Notiflix from 'notiflix';
import { Loader } from '../Loader';
import { AUTH_TYPES } from '../constants';

export const RegisterForm = ({ type }) => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const isLoading = useSelector(selectIsLoggedIn);
  const error = useSelector(selectAuthError);

  const isRegister = type === AUTH_TYPES.REGISTER;
  const theme = useTheme();

  const validateInput = (element, onValidate) => {
    if (element.value.match(element.pattern)) {
      onValidate(false);
      return true;
    }
    onValidate(true);
    return false;
  };

  const handleNameChange = event => {
    const name = event.target;
    validateInput(name, setNameError);
  };

  const handleEmailChange = event => {
    const email = event.target;
    validateInput(email, setEmailError);
  };

  const handlePasswordChange = event => {
    const password = event.target;
    validateInput(password, setPasswordError);
  };

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = e.target?.name;
    const email = e.target.email;
    const password = e.target.password;

    const isValidName = isRegister ? validateInput(name, setNameError) : true;
    const isValidEmail = validateInput(email, setEmailError);
    const isValidPassword = validateInput(password, setPasswordError);

    if (!isValidName || !isValidEmail || !isValidPassword) {
      return;
    }
    if(error){
      Notiflix.Notify.failure('произошла ошибка')
    }
    dispatch(
      registerForm({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
    {isLoading&&<Loader/>}
        <Typography
    variant="h3"
    align='center'
    mt={-20}
         sx={{
          fontWeight: 'light',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
        }}
    >Registeretion</Typography>
      <Box
        component="form"
        noValidate
        py={4}
        mx="auto"
        display="flex"
        flexDirection="column"
        gap={2}
        maxWidth="500px"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          type="text"
          required
          minLength="4"
          maxLength="8"
          label="Name"
          name="name"
          variant="outlined"
          color="secondary"
          size="small"
          inputProps={{
            style: { color: theme.palette.secondary.main },
            pattern:
              "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
          }}
          autoComplete="off"
          focused
          onChange={handleNameChange}
          error={nameError}
          {...(nameError && {
            helperText:
              "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
          })}
        />

        <TextField
          type="email"
          required
          label="E-mail"
          name="email"
          variant="outlined"
          color="secondary"
          size="small"
          inputProps={{
            style: { color: theme.palette.secondary.main },
            pattern: '^([0-9a-zA-Zd_.-])+@(([a-zA-Zd-])+.)+([a-zA-Zd]{2,4})+$',
          }}
          autoComplete="off"
          focused
          onChange={handleEmailChange}
          error={emailError}
          {...(emailError && {
            helperText:
              'Email must contain only latin letters, numbers, @ and dots',
          })}
        />

        <TextField
          type="password"
          required
          label="Password"
          name="password"
          variant="outlined"
          color="secondary"
          size="small"
          inputProps={{
            style: { color: theme.palette.secondary.main },
            pattern: '^.{4,8}$',
          }}
          autoComplete="new-password"
          focused
          onChange={handlePasswordChange}
          error={passwordError}
          {...(passwordError && {
            helperText: 'Password must contain from 4 to 8 characters',
          })}
        />
        <Button variant="outlined" type="submit" color="secondary">
          Submit
        </Button>
      </Box>
    </>
  );
};
