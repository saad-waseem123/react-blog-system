import './App.css';
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Page/Home';
import SinglePost from './Page/SinglePost';

function App() {
  return (
    <Router>
      <div className='App px-6 py-8'>
        <Navbar/>
        <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/post/:id' element={<SinglePost/>}/>
          </Routes>
        <Footer/>
      </div>
      </Router>
  );
}

export default App;