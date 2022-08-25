import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


export default function App() {
  return (
    <div className="App">

      <Header titulo="Seu nome" link="Blog"></Header>

      <Main texto="Olá, sou Aprendiz de Desenvolvedor de Sistemas no Centro WEG. Gosto de trabalhar com Javascript e criar belos aplicativos de back-end."></Main>

      <hr></hr>

      <Footer></Footer>
    </div>
  );
}