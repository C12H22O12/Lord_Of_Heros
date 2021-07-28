import './App.css';
import All from './component/Presentaional/AllHeroes'
import About from './component/Presentaional/AboutHero'
import {Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Route path="/" component={All} exact/>
      <Route path="/Hero" component={About}/>
    </div>
  );
}

export default App;
