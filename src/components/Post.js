import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function Post() {
    return (
        <div className="Blog">

            <Header titulo="Por que Dall-E não vai roubar meu emprego" link="Blog"></Header>
            <Main texto="Finalmente consegui experimentar. E posso garantir que é impossível criar imagens profissionais e úteis a partir de uma"></Main>
            <img src='https://miro.medium.com/fit/c/200/134/1*syf2qY1PXnJYeSA4vmSb0w.png'></img>

            <hr></hr>
            <Footer></Footer>
        </div>
    );
}