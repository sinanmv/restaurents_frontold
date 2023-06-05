import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import AllRestaurants from './Components/Allrestaurants/AllRestaurants';
import ViewRestaurants from './Components/ViewRestaurants';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Header/>
      </header>
      <section>
        <Routes>
          <Route path='/' element={<AllRestaurants/>}/>
          <Route path='/view/:id' element={<ViewRestaurants/>}/>
        </Routes>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
