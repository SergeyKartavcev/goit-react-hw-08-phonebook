import { Item, Contact, BtnDelete } from './ContactItem.style';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations';

const ContactItem = ({ id, name, phone, onClick }) => {
  const dispatch = useDispatch();
  return (
    <Item key={id}>
      <Contact>
        {name}: {phone} 
      </Contact>
      <BtnDelete type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </BtnDelete>
    </Item>
  );
};



export default ContactItem;
