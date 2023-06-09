import { getContacts } from 'redux/selectors';
import {List, Button, ListItem } from './ContactList.styled';
import { useSelector } from 'react-redux';


function ContactList() {
  const contacts = useSelector(getContacts);

  console.log(contacts);

  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button type="button">Delete</Button>
        </ListItem>
      ))}
    </List>
  );
}

export default ContactList;