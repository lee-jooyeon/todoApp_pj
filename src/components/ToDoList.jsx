import { useEffect, useRef, useState } from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdModeEditOutline, MdOutlineCheck } from 'react-icons/md';

export default function ToDoList({ todo, onDelete, onUpdate, onEdit }) {
  const { text, status, id } = todo;
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState(text);
  const textValue = useRef();

  const handleChange = e => {
    onUpdate({ ...todo, status: e.target.checked ? 'Complete' : 'Active' });
  };

  const handleDelete = () => {
    if(window.confirm('Are you sure you want to delete?')){
      onDelete(todo);
    } 
  };

  const handleEditChange = e => {
    setNewText(e.target.value);
  };

  const submitEdit = () => {
    setEdit(prev => !prev);
    onEdit({ ...todo, text: newText });
  };

  useEffect(() => {
    // 의존성 배열에 아무것도 넣지 않으면 Mount시에만 렌더해주고 끝나게 된다.
    // 현재는 isChange의 값이 들어가 있고 isChange의 값이 변경될때마다 useEffect 가 실행된다.
    // ? textValue.current?.focus(); useEffect 안에 작성하는 이유는?
    if(edit){
      textValue.current?.focus();
    } 
  }, [edit]);

  return (
    <li className='relative bg-gray-black py-5 px-5 mb-3 rounded-lg'>
     <input
        type='checkbox'
        id={id}
        checked={status === 'Complete'}
        onChange={handleChange}
        className='relative peer h-5 w-5 appearance-none rounded-md checked:border-dark-yellow checked:bg-dark-yellow checked:before:bg-dark-yellow  dark:ring-offset-gray-800 focus:ring dark:bg-gray-700 dark:border-gray-600 align-text-top cursor-pointer'
      />
      <div className="pointer-events-none absolute top-6 left-6 text-main-white opacity-0 peer-checked:opacity-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      {edit ? (
        <input type='text' value={newText} onChange={handleEditChange} ref={textValue} className='text-dark-yellow bg-transparent border-b-4 border-dark-yellow'/>
      ) : (
        <label className={status === 'Complete' ? 'text text_checked' : 'text'} htmlFor={id}>{text}</label>
      )}
      {edit ? (
        <button onClick={submitEdit}><MdOutlineCheck className='edit_btn' /></button>
      ) : (
        <button onClick={submitEdit}><MdModeEditOutline className='edit_btn'/></button>
      )}
      <button onClick={handleDelete} className="absolute top-6 right-7">
        <FaRegTrashAlt className=' text-main-white hover:text-main-red' />
      </button>
    </li>
  );
}
