import React, { useEffect, useRef, useState   } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdAdd, MdClose } from 'react-icons/md';

export default function ToDoCreate({ onAdd, list, setList }) {
  const [text, setText] = useState('');
  const [onOpen, setOnOpen] = useState(false);
  const textCursor = useRef();

  const onChangeText = e => {
    setText(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if(text.trim().length === 0){
      return;
    } else {
     onAdd({
        id: uuidv4(),
        text,
        status: 'Active'
      });
      console.log(list);
      localStorage.setItem('todos', JSON.stringify(list));
    }
    setText('');
  };  

  const onClickHandler = () => {
    setOnOpen(prev => !prev);
  };

  useEffect(() => {
    if(onOpen){
      textCursor.current.focus();
    }
  }, [onOpen]);

  return (
    <div>
      {onOpen ? (
        <form className='input_form' onSubmit={onSubmitHandler}>
           <input
              type='text'
              name='item'
              placeholder='Add new todo'
              className='input_box'
              ref={textCursor}
              value={text}
              onChange={onChangeText}
            />
        </form>
      ) : (
        ''
      )}
      {!onOpen ? (
        <button className='plus_btn' onClick={onClickHandler}>
          <MdAdd />
        </button>
      ) : (
        ''
      )}
      {onOpen ? (
        <button className='plus_btn close animate-move-button' onClick={onClickHandler}>
          <MdClose />
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
