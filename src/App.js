import './App.css';
import Cardscontainer from './Components/Cardscontainer';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Heading from './Components/Heading';
 
function App() {
  return (
    <div className="App">
    <Header/>
    <Heading />
    <Cardscontainer />
    <Footer />
    </div>
  );
}

export default App;