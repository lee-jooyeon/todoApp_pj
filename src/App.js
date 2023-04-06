import './App.css';
import ToDoContainer from './components/ToDoContainer';
import { DarkModeProvider } from './context/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <ToDoContainer />
    </DarkModeProvider>
  )
  }
export default App;
