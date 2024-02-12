// Libraries
import { BrowserRouter } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Styled Components
import { GlobalCss } from './styles';

// Routes
import Rotas from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
