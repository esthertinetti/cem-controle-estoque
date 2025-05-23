import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter basename="/cem-controle-estoque">
      <Routes />
    </BrowserRouter>
  )
}

export default App;