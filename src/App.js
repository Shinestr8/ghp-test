import './App.css';
import { Trackmania } from './Trackmania/Trackmania';

const backgroundImage_url =  process.env.PUBLIC_URL + '/images/background/header_background.png'; 
const wrapper_bkgnd = process.env.PUBLIC_URL + '/images/background/page_background.png';

function App() {
  return (
    <div className='page'>
      <div className="header" style={{ backgroundImage: `url(${backgroundImage_url})`, backgroundPosition:'50%' }}>
        Trackmania Trophies
      </div>
      <div className='wrapper' style={{ backgroundImage: `url(${wrapper_bkgnd})`, backgroundPosition:'50%' }}>
        <div className='content'>
          <Trackmania/>
        </div>
      </div>

    </div>
  );
}

export default App;
