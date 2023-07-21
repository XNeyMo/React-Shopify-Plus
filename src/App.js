import logo from './logo.svg';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav className='navbar'>
          <div className='nav-left'>
            <a href='#'><img src={logo} alt='Shopify Plus Logo'></img></a>

            <ul>
              <li><a href='#'>Vende</a></li>
              <li><a href='#'>Gestiona</a></li>
              <li><a href='#'>Integra</a></li>
              <li><a href='#'>Plataforma</a></li>
              <li><a href='#'>Precios</a></li>
            </ul>
          </div>

          <ul className='nav-right'>
            <li><a href='#'>Contactar con el equipo de ventas</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
