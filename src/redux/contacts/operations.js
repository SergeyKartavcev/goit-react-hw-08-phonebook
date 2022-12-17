import axios from 'axios';
import contactsActions from './actions';


export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const { data } = await axios.get('/contacts');

    dispatch(contactsActions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.massage));
    alert(error.message);
  }
};

export const addContact = (name, number) => async dispatch => {
  const contact = { name, number };
  dispatch(contactsActions.addContactsRequest());


  try {
    const { data } = await axios.post('/contacts', contact);

    dispatch(contactsActions.addContactsSuccess(data));
  } catch (error) {
    dispatch(contactsActions.addContactsError(error.massage));
    alert(error.message);
  }
};

export const deleteContacts = id => async dispatch => {
  dispatch(contactsActions.deleteContactsRequest());

  try {
    await axios.delete(`/contacts/${id}`);

    dispatch(contactsActions.deleteContactsSuccess(id));
  } catch (error) {
    dispatch(contactsActions.deleteContactsError(error.massage));
    alert(error.message);
  }
};


