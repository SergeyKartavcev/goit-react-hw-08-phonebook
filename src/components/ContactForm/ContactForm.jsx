import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { selectContacts } from 'redux/selectors';
import { Form, Label, Input, Button } from './ContactForm.styled';
import { addContact } from 'redux/operations';
import { selectIsAdded } from 'redux/selectors';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const isAdded = useSelector(selectIsAdded);
  const dispatch = useDispatch();


  const handleInputChange = evt => {
    
    const { value } = evt.currentTarget;

    evt.currentTarget.name === 'name' ? setName(value) : setPhone(value);
  };

  const handleSubmit = event => { 
    event.preventDefault();
    if (isAdded(name)) {
      return alert(`${name} is already in contacts !!!`);
    } else {
      dispatch(addContact(name, phone));
    }

    setName('');
    setPhone('');
  };

  
 

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleInputChange}
          required
        />
      </Label>
      <Label>
        <Input
          type="tel"
          name="phone"
          placeholder="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
          onChange={handleInputChange}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
