import logo from './logo.svg';
import './App.css';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div className="App">

      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
}

export default App;
