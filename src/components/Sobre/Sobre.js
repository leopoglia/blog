import '../../index.css';
import Header from '../Header';
import Footer from '../Footer';
import Main from './Main';



export default function Sobre() {
    return (
        <div className="Sobre">
            <Header titulo="Sobre" />

            <Main />
            <hr />
            <Footer />
        </div>
    );
}