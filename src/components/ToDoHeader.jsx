import React from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import { HiSun, HiMoon }  from 'react-icons/hi';

export default function Header({ filters, filter, onChangeFilter }) {
  const {darkMode, darkToggleHanlder} = useDarkMode();
  const dateIs = new Date().toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric'
  });

  const day = new Date().toLocaleDateString('en-US', {weekday: 'long'});

  return (
    <header className='pt-16 pb-8 px-1'>
      <button onClick={darkToggleHanlder} className='absolute top-5 left-3'> 
        {!darkMode && <HiMoon className='darkmode_icon text-[#f7bc48]'/>}
        {darkMode && <HiSun className='darkmode_icon text-main-white' />}
      </button>
      <ul className='flex mb-6'>
        {filters.map((value, index) => (
          <li key={index} className={filter === value? 'focus filter' : 'filter'} onClick={() => onChangeFilter(value)}>
           {value}
          </li>
        ))}
      </ul>
      <span className="text-main-black dark:text-main-white  text-xl pl-4 font-semibold block mb-3">Today's To-Do List 📝💛</span>
      <span className="dark:text-main-white text-main-black pl-4 font-semibold">{dateIs}</span>
      <span className="dark:text-main-white text-main-black pl-4 font-semibold">{day}</span>
    </header>
  );
}
