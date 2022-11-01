// import logo from './logo.svg';
import Navbar from './components/Navbar'
import Home from './components/Home';


// console.log(process.env)

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
