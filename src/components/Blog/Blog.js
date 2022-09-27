import '../../index.css';
import Header from '../Header';
import Footer from '../Footer';
import Post from './Posts';
import { Link } from "react-router-dom";


export default function App() {
    return (
        <div className="Blog">
            <Header titulo="Blog" link="Inicio"></Header>
            <Link to="/post">
                <Post></Post>
            </Link>
            <hr></hr>
            <Footer></Footer>
        </div>
    );
}