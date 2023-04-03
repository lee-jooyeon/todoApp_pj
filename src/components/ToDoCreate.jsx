import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function ToDoCreate({ onAdd }) {
  const [text, setText] = useState('');

  const onChangeValue = e => {
    setText(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (text.trim() === '') {
      return;
    } else {
      onAdd({
        id: uuidv4(),
        status: 'Active',
        text,
      });
    }
    setText('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='text'
        placeholder='Add your Todos!'
        value={text}
        onChange={onChangeValue}
      />
      <button>Add</button>
    </form>
  );
}
