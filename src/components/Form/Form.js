import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {addItems} from '../../redux/Slice';
import css from './Form.module.css';

function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const  items  = useSelector(state => state.items.items);

  const handleChange = e => {
    const {name, value} = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (items.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
      return alert(`${contact.name} is already in contacts`);
    }
    // props.onSubmit({name, number});
    dispatch(addItems(contact));
    resetForm();
  }

  const resetForm = () => {
    setName('');
    setNumber('');
  }

    return (
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.form__label}>
          Name :
          <input
            className={css.form__input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <br />
        <label className={css.form__label}>
          Number :
          <input
            className={css.form__input}
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.form__btn} type="submit">
          Add contact
        </button>
      </form>
    )
}

export default Form;
