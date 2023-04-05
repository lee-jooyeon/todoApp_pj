import { useState } from 'react';
import ToDoCreate from './ToDoCreate';
import ToDoHeader from './ToDoHeader';
import ToDoList from './ToDoList';

const filters = ['All', 'Active', 'Complete'];
export default function ToDoContainer() {
  const [filter, setFilter] = useState('All');
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

  const filtered = getFilterTodo(todos, filter);

  return (
    <section className='bg-main-black'>
      <ToDoHeader
        filter={filter}
        onChangeFilter={setFilter}
        filters={filters}
      />
      <ul className='mx-5'>
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

// 함수 내부의 특정 값이 필요하지 않은 경우라, 컴포넌트 밖으로 함수를 빼내서 선언해 두었어요
// 내부에 작성하게 되면 컴포넌트가 re-render 될때마다 계속 불필요하게 재선언(재할당)될텐데, 굳이 컴포넌트 내부에 있을 필요가 없는 함수라 밖으로 빼둔거랍니다.
function getFilterTodo(todos, filter) {
  if (filter === 'All') {
    return todos;
  }
  return todos.filter(todo => todo.status === filter);
}
