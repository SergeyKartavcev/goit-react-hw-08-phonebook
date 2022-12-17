import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import { fetchContacts } from '../redux/contacts/operations';
import Filter from '../components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../redux/contacts/selectors';

export default function Contacts() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      {contacts.length > 0 && <ContactList />}
      <Filter />
    </>
  );
}
