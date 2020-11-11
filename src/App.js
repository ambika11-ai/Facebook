import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Left from './Left';
import M from './M';
import Freindlist from './Freindlist';

function App() {
  return (
    <div className="App">
    <Header/>
    <div className="facebook">
    <Left />
    <M/>
    </div>
    <Freindlist/>
    </div>
  );
}

export default App;
