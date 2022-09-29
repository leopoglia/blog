import '../../index.css';
import Footer from '../Footer';
import Header from '../Header';

export default function App() {
  return (
    <div className="App">
      <Header titulo="Inicio"></Header>


      <h2 className='about'>Olá 👋, eu sou Leonardo</h2>
      <h3>Técnico em Desenvolvimento de Sistema Júnior</h3>
      <hr />
      <Footer />
    </div>
  );
}