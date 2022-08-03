import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {delItems} from '../../../redux/Slice';
import css from './Contact.module.css';

const Contact = ({id, name, number}) => {
  const dispatch = useDispatch();
  const delContact = id => dispatch(delItems(id));

  return (
    <>
      <li id={id} className={css.contacts__item}>
        <p className={css.contacts__name}>
            {name} : ...
        <span className={css.contacts__number}>
            {number}
        </span>
        </p>
        <button
          className={css.contacts__btn}
          type="button"
          onClick={() => {delContact(id)}}
        >
          Delete
        </button>
      </li>
    </>

  )
}

Contact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
}

export default Contact;
