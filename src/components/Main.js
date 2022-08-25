import '../index.css';

export default function Main(props) {
    return (
        <main>
            <p className='about'>{props.texto}</p>
        </main>
    );
}