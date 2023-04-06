import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext(); 

export function DarkModeProvider({children}){
  const [darkMode, setDarkMode] = useState(false);
  const darkToggleHanlder = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  }

  useEffect(() => {
    // 어플리케이션이 실행될 때 (마운트) 딱 한번 실행된다.
    // 내부적으로 한번 마운트 될 때 로컬스토리지에 데이터를 읽어와서 내부적인 상태와 html 상태도 업데이트 해준다.
    // 토글링할 때마다 html뿐만 아니라 로컬스토리지에도 저장을 해준다.
    const isDark = 
    localStorage.theme === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
      setDarkMode(isDark);
      updateDarkMode(isDark);
  }, []);

  return(
    <DarkModeContext.Provider value={{darkMode, darkToggleHanlder}}>
        {children}
    </DarkModeContext.Provider>
  )
}

export const useDarkMode = () => useContext(DarkModeContext);
function updateDarkMode(darkMode){
  if(darkMode){
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
}