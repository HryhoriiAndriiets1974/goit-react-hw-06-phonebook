import Contact from './Contact';
import { useSelector } from 'react-redux';
import css from './ContactList.module.css';


const filterContacts = (items, value) => {
return items.filter(contact =>
  contact.name.toLowerCase().includes(value.toLowerCase())
);
};

const ContactList = () => {
  const items  = useSelector(state => state.contacts.items);
  const value = useSelector(state => state.contacts.filter);
  const contacts = filterContacts(items, value);

  return (
  <ul className={css.contacts}>
      { contacts.length
       ? (
            contacts.map(({id, name, number}) => (
              <li key={id} className={css.contacts__item}>
                <Contact
                  id={id}
                  name={name}
                  number={number}
                />
              </li>
            ))
            )
       : (<p className={css.contacts__message}>Your phonebook is empty !!!</p>)
      }
</ul>)
}

export default ContactList;
