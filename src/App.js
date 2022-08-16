import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <>

    <NavBar />
    <ItemListContainer  nombre="Camisa" precio="1400"/>
    <ItemListContainer  nombre="Franela" precio="2500"/>

    </>
  );
}

export default App;
