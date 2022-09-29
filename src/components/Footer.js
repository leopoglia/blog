import '../index.css';

export default function Footer() {
    return (
        <footer>
            <div>
                <a className="twitter" href='https://twitter.com/leopoglia'>
                    <ion-icon name="logo-twitter"></ion-icon>
                </a>

                <a className="github" href='https://github.com/leopoglia'>
                    <ion-icon name="logo-github"></ion-icon>
                </a>

                <a className="instagram" href='https://www.instagram.com/leopoglia'>
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>

                <a className="linkedin" href='https://www.linkedin.com/in/leonardo-heitor-poglia-454b80251/'>
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
            </div>

            <p className='copy'>
                © 2022 Leonardo Heitor Poglia

            </p>
        </footer>
    );
}