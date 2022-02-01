import logo from './logo.svg';
import './App.css';
import { Trackmania } from './Trackmania/Trackmania';

function App() {
  return (
    <div className='page'>
      <div className='header'>
        Trackmania Trophies
      </div>
      <div className='wrapper'>
        <div className='content'>
          <Trackmania/>
        </div>
      </div>

    </div>
  );
}

export default App;
