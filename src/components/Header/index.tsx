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
import { HashLink } from 'react-router-hash-link';

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
          <Link title="Início" to="/">
            <img src={logo} alt="EPlay" />
          </Link>
          <nav>
            <Links>
              <LinkItem>
                <Link title="Link para a página categorias" to="/categorias">
                  Categorias
                </Link>
              </LinkItem>
              <LinkItem>
                <HashLink title="Link para a seção em breve" to="/#coming-soon">
                  Em breve
                </HashLink>
              </LinkItem>
              <LinkItem>
                <HashLink title="Link para a seção promoções" to="/#on-sale">
                  Promoções
                </HashLink>
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
            <Link
              onClick={() => setIsMenuOpen(false)}
              title="Link para a página categorias"
              to="/categorias"
            >
              Categorias
            </Link>
          </LinkItem>
          <LinkItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Link para a seção em breve"
              to="/#coming-soon"
            >
              Em breve
            </HashLink>
          </LinkItem>
          <LinkItem>
            <HashLink
              onClick={() => setIsMenuOpen(false)}
              title="Link para a seção promoções"
              to="/#on-sale"
            >
              Promoções
            </HashLink>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  );
};

export default Header;
