import logo from './logo.svg';
import './App.css';
import Hearder from './pages/Header/Header';
import Hero from './pages/Hero/Hero';
import Newproduct from './pages/Newproduct/Newproduct';


function App() {
  return (
    <div className="App">
      <Hearder/>
      <Hero/>
      <Newproduct/>
    </div>
  );
}

export default App;
