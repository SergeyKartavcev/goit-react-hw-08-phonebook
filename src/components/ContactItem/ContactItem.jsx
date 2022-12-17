import { ListItem, Typography, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteContacts } from '../../redux/contacts/operations';
import DeleteIcon from '@mui/icons-material/Delete'
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
      <Button  color='secondary'  type="button" onClick={() => dispatch(deleteContacts(id))}>
       <DeleteIcon />
      </Button>

    </ListItem>
  );
};

export default ContactItem;
