// Libraries
import { Link } from 'react-router-dom';

// Styled Components
import {
  HeaderBar,
  Links,
  LinkItem,
  CartButton,
  Hamburger,
  HeaderRow,
  NavMobile,
} from './styles';

// Assets
import logo from '../../assets/images/logo.svg';
import carrinho from '../../assets/images/carrinho.svg';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../../store/reducers/cart';
import { RootReducer } from '../../store';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  const openCart = () => dispatch(open());

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <Hamburger onClick={handleMenuClick}>
            <span />
            <span />
            <span />
          </Hamburger>
          <Link to="/">
            <img src={logo} alt="EPlay" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link to="/categorias">Categorias</Link>
              </LinkItem>
              <LinkItem>
                <a href="#">Novidades</a>
              </LinkItem>
              <LinkItem>
                <a href="#">Promoções</a>
              </LinkItem>
            </Links>
          </nav>
        </div>
        <CartButton onClick={openCart}>
          {items.length}
          <span> - produto(s)</span> <img src={carrinho} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <Link to="/categorias">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  );
};

export default Header;
