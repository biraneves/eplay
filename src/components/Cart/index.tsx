// Modules
import { useDispatch, useSelector } from 'react-redux';

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
import { formataPreco } from '../../utils/moeda';
import { RootReducer } from '../../store';

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => dispatch(close());

  const getTotalPrice = () => {
    return items.reduce((acumulator, presentValue) => {
      return (acumulator += presentValue.prices.current!);
    }, 0);
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CardItem key={item.id}>
              <img src={item.media.thumbnail} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <Tag>{item.details.category}</Tag>
                <Tag>{item.details.system}</Tag>
                <span>{formataPreco(item.prices.current)}</span>
              </div>
              <button onClick={() => removeItem(item.id)} type="button" />
            </CardItem>
          ))}
        </ul>
        <Quantity>{items.length} jogo(s) no carrinho</Quantity>
        <Prices>
          Total de {formataPreco(getTotalPrice())}{' '}
          <span>em até 6x sem juros</span>
        </Prices>
        <Button title="Continuar comprando" type="button">
          Continuar com a compra
        </Button>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
