// Components
import Button from '../Button';
import Tag from '../Tag';

// Styled Components
import { Banner, Infos } from './styles';

type Props = {
  game: Game;
};

// Assets
import { parseToBRL } from '../../utils';
import { useDispatch } from 'react-redux';
import { add, open } from '../../store/reducers/cart';

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(game));
    dispatch(open());
  };

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices.discount && (
              <>
                De <span>{parseToBRL(game.prices.old)}</span>
                <br />
              </>
            )}
            {game.prices.current && <>Por {parseToBRL(game.prices.current)}</>}
          </p>
          {game.prices.current && (
            <Button
              type="button"
              variant="primary"
              title="Adicionar ao carrinho"
              onClick={addToCart}
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  );
};

export default Hero;
