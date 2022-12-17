import { ListItem, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operations';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ListItem
      sx={{
        bgcolor: 'background.paper',
        boxShadow: 1,
        borderRadius: 2,
        p: 2,
        minWidth: 500,
      }}
      key={id}
    >
      <Typography>
        {name} : {number}
      </Typography>
      <button type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </button>
    </ListItem>
  );
};

export default ContactItem;
