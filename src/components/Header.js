import '../index.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Header(props) {

    const [moon, setMoon] = useState(<ion-icon id="moon" name="moon" onClick={() => darkMode()}></ion-icon>);

    function darkMode(val) {
        if (val) {
            setMoon(<ion-icon id="moon" name="moon" onClick={() => darkMode(false)}></ion-icon>)
        } else {
            setMoon(<ion-icon id="moon" name="ellipse" onClick={() => darkMode(true)}></ion-icon>)
        }
    }


    return (
        <header>
            <label>
                <p>{props.titulo}</p>
            </label>

            <section>
                <Link to="/" className='link'>
                    <p>Inicio</p>
                </Link>

                <Link to="/blog" className='link'>
                    <p>Blog</p>
                </Link>

                <Link to="/sobre" className='link'>
                    <p>Sobre</p>
                </Link>


                {moon}

            </section>

        </header>
    );
}