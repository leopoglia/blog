import '../index.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

export default function Header(props) {

    const [moon, setMoon] = useState(<ion-icon id="moon" name="moon" onClick={() => darkMode()}></ion-icon>);


    useEffect(() => {

        if (localStorage.getItem("darkmode") === "activated") {
            setMoon(<ion-icon id="moon" name="ellipse" onClick={() => darkMode(false)}></ion-icon>)
            localStorage.setItem("darkmode", "activated")
        }
    }, []);

    function darkMode(val) {
        if (localStorage.getItem("darkmode") === "activated") {
            setMoon(<ion-icon id="moon" name="moon" onClick={() => darkMode(false)}></ion-icon>)
            localStorage.setItem("darkmode", "disabled")
        } else {
            setMoon(<ion-icon id="moon" name="ellipse" onClick={() => darkMode(true)}></ion-icon>)
            localStorage.setItem("darkmode", "activated")
        }

        document.querySelector('html').classList.toggle('darkmode');
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