import { useState } from 'react';
import ToDoCreate from './ToDoCreate';
import ToDoList from './ToDoList';

export default function ToDoContainer() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      status: 'Active',
      text: '공부하기',
    },
    {
      id: 2,
      status: 'Active',
      text: '책읽기',
    },
    {
      id: 3,
      status: 'Active',
      text: '요리하기',
    },
  ]);

  // todo 리스트 추가
  const onAdd = todo => {
    setTodos([...todos, todo]);
  };

  // todo 리스트 업데이트
  const onUpdate = updated => {
    setTodos(todos.map(item => (item.id === updated.id ? updated : item)));
  };

  // todo 리스트 제거
  const onDelete = deleted => {
    setTodos(todos.filter(item => item.id !== deleted.id));
  };

  const onEdit = edited => {
    setTodos(todos.map(item => (item.id === edited.id ? edited : item)));
  };

  return (
    <section>
      <ul>
        {filtered.map(data => (
          <ToDoList
            key={data.id}
            todo={data}
            onDelete={onDelete}
            onUpdate={onUpdate}
            onEdit={onEdit}
          />
        ))}
      </ul>
      <ToDoCreate onAdd={onAdd} />
    </section>
  );
}
