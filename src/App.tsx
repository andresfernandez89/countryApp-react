import { Outlet } from 'react-router-dom';
import "./App.css";
import { Navigator } from './components/nav/Navigator';

function App() {
  return (
    <>
      <header>
        <Navigator />
      </header>
      <Outlet />
      <footer></footer>
    </>
  );
}

export default App;
