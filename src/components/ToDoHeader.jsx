import React from 'react';

export default function Header({ filters, filter, onChangeFilter }) {
  const dateIs = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric'
  });

  const day = new Date().toLocaleDateString('en-US', {weekday: 'long'});

  return (
    <header className='pt-8 pb-8 px-1'>
      <ul className='flex mb-6'>
        {filters.map((value, index) => (
          <li key={index} className={filter === value? 'focus filter' : 'filter_tab filter'} onClick={() => onChangeFilter(value)}>
           {value}
          </li>
        ))}
      </ul>
      <span className="text-main-white text-xl pl-4 font-semibold block mb-3">Today's To-Do List 📝💛</span>
      <span className="text-main-white pl-4 font-semibold">{dateIs}</span>
      <span className="text-main-white pl-4 font-semibold">{day}</span>
    </header>
  );
}
