
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componants/Footer/Footer';
import Navbar from './componants/navbar/Navbar';
import Home from './componants/Pages/Home';
import Login from './componants/Loginpage/Login';
import LoggedPage from './componants/Pages/LoggedPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/Customer' Component={LoggedPage}/>
            <Route path='/login' Component={Login}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
