import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Post from './Post';


export default function App() {
    return (
        <div className="Blog">

            <Header titulo="Blog" link="Inicio"></Header>

            <Post></Post>
            <Post></Post>
            <Post></Post>
            <Post></Post>


            <hr></hr>

            <Footer></Footer>
        </div>
    );
}