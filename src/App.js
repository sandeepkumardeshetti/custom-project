import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import { AnimatedRoutes } from './AnimatedRoutes';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
      
    </div>
  );
}

export default App;


