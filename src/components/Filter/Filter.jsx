import style from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors.js';
import { setFilter } from '../../redux/filterSlice.js';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={filter}
      onChange={e => dispatch(setFilter(e.target.value))}
    />
  );
};

export default Filter;
