import Contact from './Contact';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';


const filterContacts = (items, value) => {
return items.filter(contact =>
  contact.name.toLowerCase().includes(value.toLowerCase())
);
};

const ContactList = () => {
  const {items}  = useSelector(state => state.items);
  const value = useSelector(state => state.filter);
  const contacts = filterContacts(items, value);

  return (
  <ul className={css.contacts}>
  {contacts.map(({id, name, number}) => (
      <Contact
        id={id}
        name={name}
        number={number}
      />
  ))}
</ul>)
}

export default ContactList;
