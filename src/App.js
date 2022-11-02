// import logo from './logo.svg';
import Navbar from './components/Navbar'
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Create from './components/Create';

// console.log(process.env)

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/create' element={ <Create /> } />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
