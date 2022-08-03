import { useSelector, useDispatch } from 'react-redux';
import {updateFilter} from '../../redux/Slice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.contacts.filter);

  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
    console.log(e.currentTarget.value)
  };

  return (
    <label className={css.filter__label}>
      Find contacts by name :
      <input
        className={css.filter__input}
        type="name"
        value={filter}
        onChange={changeFilter} />
    </label>
  )
}

export default Filter;
