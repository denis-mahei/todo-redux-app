import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todoSlice.js';

const Form = () => {
  const dispatch = useDispatch();

  const handleAddTodo = event => {
    event.preventDefault();
    const form = event.target;

    dispatch(
      addTodo({
        id: crypto.randomUUID(),
        text: form.elements.search.value,
      }),
    );
    form.reset();
  };
  return (
    <form className={style.form} onSubmit={handleAddTodo}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};

export default Form;
