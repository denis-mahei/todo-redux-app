import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentTodo } from '../../redux/selectors.js';
import { cancelEditTodo, updateTodo } from '../../redux/todoSlice.js';

const EditForm = () => {
  const dispatch = useDispatch();
  const currentTodo = useSelector(selectCurrentTodo);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const newTodo = form.elements.text.value;
    dispatch(
      updateTodo({
        ...currentTodo,
        text: newTodo,
      }),
    );
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={currentTodo?.text}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => dispatch(cancelEditTodo())}
      >
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
export default EditForm;
