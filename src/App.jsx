import { Link } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Link to='/canal'>canal</Link>
      <Link to='/programa'>programas</Link>
      <Link to='/programa_fav'>programas favoritos</Link>
      <Link to='/usuario'>usuarios</Link>
    </div>
  );
}

export default App;
