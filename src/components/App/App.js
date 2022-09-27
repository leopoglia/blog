import '../../index.css';
import Header from '../Header';
import Main from './Main';
import Footer from '../Footer';


export default function App() {
  return (
    <div className="App">
      <Header titulo="Leonardo Heitor Poglia" link="Blog"></Header>
      <Main />
      <hr />
      <Footer />
    </div>
  );
}