// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import useToggle from '@react-augment/use-toggle';

export function App() {
  const toggle = useToggle();
  
  return (
    <>
      <input type={ toggle.isOpen() ? 'text' : 'password' } />
      <button 
        onClick={toggle}>Show/Hide Pass</button>
    </>
  );
}

export default App;
