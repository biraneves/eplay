// Components
import Tag from '../Tag';
import Button from '../Button';

// Styled Components
import { Image, Title, Prices } from './styles';

// Methods
import { parseToBRL } from '../../utils';

// Assets
import { useGetFeaturedGameQuery } from '../../services/api';

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery();

  if (!game) {
    return <h3>Carregando...</h3>;
  }

  return (
    <Image style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Prices>
            De <span>{parseToBRL(game.prices.old as number)}</span>
            <br />
            por apenas {parseToBRL(game.prices.current as number)}
          </Prices>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique para aproveitar a oferta!"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  );
};

export default Banner;
