import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function App() {
    return (
        <div className="Blog">

            <Header titulo="Blog" link="Inicio"></Header>

            <Main></Main>
            <hr></hr>

            <Footer></Footer>
        </div>
    );
}