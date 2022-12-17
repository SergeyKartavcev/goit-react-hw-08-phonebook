import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { addContact } from '../../redux/contacts/operations';
import {
  selectIsAdded,
  selectIsLoadingContact,
  selectError,
} from '../../redux/contacts/selectors';
import { Box, Typography } from '@mui/material';
import Notiflix from 'notiflix';
import { Loader } from '../Loader';
import s from '../ContactForm/ContactForm.module.css';
export default function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isAdded = useSelector(selectIsAdded);
  const isLoading = useSelector(selectIsLoadingContact);
  const isError = useSelector(selectError);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    if (isError) {
      Notiflix.Notify.error('произошла ошибка');
    }

    if (isAdded(name)) {
      return Notiflix.Notify.info(`${name} is already in contacts`);
    } else {
      dispatch(addContact(name, number));
    }

    setName('');
    setNumber('');
    form.reset();
  };

  return (
    <>
      <Typography
        variant="h3"
        align="center"
         height={70}
        sx={{
          fontWeight: 'light',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          bgcolor: 'success.light'
        }}
      >
        Phone book
      </Typography>
      {isLoading && <Loader />}
      <Box
        noValidate
        py={4}
        mx="auto"
        display="flex"
        flexDirection="column"
        gap={2}
        maxWidth="500px"
      
      >
        <form className={s.form} onSubmit={handleSubmit}>
          <label className={s.label}>
            Name
            <input
              className={s.input}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </label>
          <label className={s.label}>
            Phone number
            <input
              className={s.input}
              type="tel"
              name="phone"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
            />
          </label>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </form>
      </Box>
    </>
  );
}

ContactsForm.propTypes = {
  onAddContacts: propTypes.func,
};
