import { useSelector, useDispatch } from 'react-redux';
import contactsActions from '../../redux/contacts/actions';
import { selectFilter } from '../../redux/contacts/selectors';
import { Box, TextField, Typography } from '@mui/material';



export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
  <>
       <Typography
     variant="h3"
    align='center'
         sx={{
          fontWeight: 'light',
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          minWidth: 300,
          
        }}
    >Search</Typography>
    <Box py={2} mx="auto" maxWidth="500px" width="100%">
      <TextField
        type="text"
        label="Find contacts by name:"
        name="filter"
        value={filter}
        variant="outlined"
        color="secondary"
        size="small"
        id="filter"
        htmlFor="filter"
        autoComplete="off"
        focused
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
        fullWidth
      />
    </Box>
    </>
  );
}
