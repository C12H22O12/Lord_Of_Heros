import './App.css';
import All from './compo_be/Presentaional/AllHeroes'
import About from './compo_be/Presentaional/AboutHero'
import {Route} from 'react-router-dom'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './page/Home';

function App() {
  return (
    <div>
      <Header />
      <main>
      <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
