import './App.css';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Homepage from './pages/HomePage';

function App() {
  return (
    <>
      <TopBar />
      <Header />
      <Homepage />
      <Footer/>
    </>
  );
}

export default App;
