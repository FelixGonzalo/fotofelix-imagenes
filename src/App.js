import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Aplicaciones en la Nube
        </p>
        <ul>
          <li>Ascencio Gómez Gino</li>
          <li>Borja Li Patrick</li>
          <li>Castro Cubas Félix</li>
          <li>Obregón Morales Luis</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
