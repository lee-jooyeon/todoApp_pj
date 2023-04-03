export default function ToDoHeader({ filter, onChangeFilter, filters }) {
  return (
    <header>
      <ul>
        {filters.map((value, index) => (
          <li key={index}>
            <button onClick={() => onChangeFilter(value)}>{value}</button>
          </li>
        ))}
      </ul>
    </header>
  );
}
