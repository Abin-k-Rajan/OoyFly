import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './common/Header/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './components/About/About';
import BookingPage from './components/BookingPage/BookingPage';
import ListPage from './components/ListPage/ListPage';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import UserProfile from './components/UserProfile/UserProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/list-flight' Component={ListPage} />
          <Route exact path='/booking/:id' Component={BookingPage} />
          <Route exact path='/login' Component={Login} />
          <Route exact path='/register' Component={Register} />
          <Route exact path='/profile' Component={UserProfile} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
