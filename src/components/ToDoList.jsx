import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

export default function ToDoList({ todo, onDelete, onUpdate, onEdit }) {
  const { text, status, id } = todo;
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleChange = e => {
    onUpdate({ ...todo, status: e.target.checked ? 'Complete' : 'Active' });
  };

  const handleDelete = () => {
    onDelete(todo);
  };

  const handleEditChange = e => {
    setNewText(e.target.value);
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const submitEdit = () => {
    onEdit({ ...todo, text: newText });
    setEdit(false);
  };

  return (
    <li>
      <input
        type='checkbox'
        id={id}
        checked={status === 'Complete'}
        onChange={handleChange}
      />
      {edit ? (
        <input type='text' value={newText} onChange={handleEditChange} />
      ) : (
        <label htmlFor={id}>{text}</label>
      )}
      {edit ? (
        <button onClick={submitEdit}>수정하기 완료</button>
      ) : (
        <button onClick={handleEdit}>수정하기</button>
      )}
      <button onClick={handleDelete}>
        <FaTrashAlt />
      </button>
    </li>
  );
}
