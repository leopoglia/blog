import '../index.css';
import Footer from './Footer';
import Header from './Header';

export default function App() {
    return (
        <div className="Blog">

            <Header titulo="Blog" link="Inicio"></Header>

            <p className='about'>
            Olá, sou Aprendiz de Desenvolvedor de Sistemas no Centro WEG. Gosto de trabalhar com Javascript e criar belos aplicativos;
            </p>
            <hr></hr>

            <Footer></Footer>
        </div>
    );
}