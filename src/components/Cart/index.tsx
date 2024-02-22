// Modules
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Components
import Button from '../Button';
import Tag from '../Tag';

// Styled components
import {
  CardItem,
  CartContainer,
  Overlay,
  Prices,
  Quantity,
  Sidebar,
} from './styles';

// Methods
import { close, remove } from '../../store/reducers/cart';
import { getTotalPrice, parseToBRL } from '../../utils';
import { RootReducer } from '../../store';

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const closeCart = () => dispatch(close());

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const goToCheckout = () => {
    navigate('/checkout');
    closeCart();
  };

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <CardItem key={item.id}>
                  <img src={item.media.thumbnail} alt={item.name} />
                  <div>
                    <h3>{item.name}</h3>
                    <Tag>{item.details.category}</Tag>
                    <Tag>{item.details.system}</Tag>
                    <span>{parseToBRL(item.prices.current)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CardItem>
              ))}
            </ul>
            <Quantity>{items.length} jogo(s) no carrinho</Quantity>
            <Prices>
              Total de {parseToBRL(getTotalPrice(items))}{' '}
              <span>em até 6x sem juros</span>
            </Prices>
            <Button
              onClick={goToCheckout}
              title="Continuar comprando"
              type="button"
            >
              Continuar com a compra
            </Button>
          </>
        ) : (
          <p className="empty-text">
            O carrinho está vazio. Adicione pelo menos um produto para continuar
            com a compra.
          </p>
        )}
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
