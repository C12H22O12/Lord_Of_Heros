import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './page/Home';

function App() {
    return (
        <div id="appContainer">
            <Header/>
            <main>
                <Home/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
