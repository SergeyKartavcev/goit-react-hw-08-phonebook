import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContacts } from 'redux/operations';

const ContactList = () => {
  const dispatch = useDispatch();
  const filterContacts = useSelector(selectFilteredContacts);
  console.log(filterContacts);

  return (
    <>
      {filterContacts.length > 0 && (
        <ul>
          {filterContacts.map(({ id, name, phone }) => (
            <ContactItem
              id={id}
              key={id}
              name={name}
              phone={phone}
              onClick={() => dispatch(deleteContacts(id))}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
