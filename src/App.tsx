// Libraries
import { BrowserRouter } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Styled Components
import { GlobalCss } from './styles';

// Routes
import Rotas from './routes';
import { Provider } from 'react-redux';
import { store } from './store';
import Cart from './components/Cart';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
