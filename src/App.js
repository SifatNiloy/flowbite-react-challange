import logo from './logo.svg';
import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';

function App() {
  return (
    <div className="App">

     <Navbar></Navbar>
      <h2 className='text-primary font-bold text-3xl'>primary color checking</h2>
      <Footer></Footer>
    </div>
  );
}

export default App;
