import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Header from './common/Header/Header';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './components/About/About';
import BookingPage from './components/BookingPage/BookingPage';
import ListPage from './components/ListPage/ListPage';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' Component={Home} />
          <Route exact path='/about' Component={About} />
          <Route exact path='/list-flight' Component={ListPage} />
          <Route exact path='/booking/:id' Component={BookingPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
