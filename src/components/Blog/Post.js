import '../../index.css';
import Header from '../Header';
import Footer from '../Footer';

export default function Post() {
    return (
        <div className="Blog">

            <Header titulo="Titulo" link="Blog"></Header>
            
            <p className='about'>Lorem Ipsum</p>

            <img src='https://miro.medium.com/fit/c/200/134/1*syf2qY1PXnJYeSA4vmSb0w.png'></img>

            <hr></hr>
            <Footer></Footer>
        </div>
    );
}