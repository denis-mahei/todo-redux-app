import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDebounce } from 'use-debounce';
import { setFilter } from '../../redux/filterSlice.js';
import style from './Filter.module.css';

const Filter = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const [debouncedFilter] = useDebounce(inputValue, 200);

  useEffect(() => {
    dispatch(setFilter(inputValue));
  }, [debouncedFilter]);

  return (
    <input
      className={style.input}
      placeholder="Find it"
      name="filter"
      value={inputValue}
      onChange={e => setInputValue(e.target.value)}
    />
  );
};

export default Filter;
