import { getContacts } from 'redux/selectors';
import {List, Button, ListItem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const contactDelete = (id) => {
    dispatch(deleteContact(id));
  }

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button type="button" onClick={() => contactDelete(id)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
}

export default ContactList;