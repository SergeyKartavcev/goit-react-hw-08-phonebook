import ContactItem from '../ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoadingContact } from '../../redux/contacts/selectors';
import { deleteContacts } from '../../redux/contacts/operations';
import { List, Typography } from '@mui/material';
import { Loader } from '../Loader';

const ContactList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoadingContact);
  return (
    <>
       {isLoading&& <Loader/> }
       
      <Typography
       height={70}
        variant="h3"
        align="center"
        sx={{
          fontWeight: 'light',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          bgcolor: 'success.light'
        }}
      >
        Contacts
      </Typography>
      {filterContacts.length > 0 && (
        <List
          sx={{
            maxWidth: 500,
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            marginX: 'auto',
          }}
        >
          {filterContacts.map(({ id, name, number }) => (
         
            <ContactItem
              id={id}
              key={id}
              name={name}
              number={number}
              onClick={() => dispatch(deleteContacts(id))}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;
