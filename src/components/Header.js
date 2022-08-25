import '../index.css';
import { Link } from "react-router-dom";


export default function Header(props) {
    let link;

    if (props.link === "Blog") {
        link = "/blog"
    } else if (props.link === "Inicio") {
        link = "/"
    }


    return (
        <header>
            <label>
                <p>{props.titulo}</p>
            </label>

            <Link to={link}><p className='blog'>{props.link}</p></Link>
        </header>
    );
}