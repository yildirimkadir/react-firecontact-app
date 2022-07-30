import './App.css';
import Contact from './components/Contact';
import Register from './components/Register';

function App() {
  return (
    <div className="container d-flex justify-content-evenly align-items-center flex-wrap">
      <Register />
      <Contact />
    </div>
  );
}

export default App;
