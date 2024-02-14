// Components
import Tag from '../Tag';
import Button from '../Button';

// Styled Components
import { Imagem, Titulo, Precos } from './styles';

// Methods
import { formataPreco } from '../../utils/moeda';

// Assets
import { useGetFeaturedGameQuery } from '../../services/api';

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery();

  if (!game) {
    return <h3>Carregando...</h3>;
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Precos>
            De <span>{formataPreco(game.prices.old as number)}</span>
            <br />
            por apenas {formataPreco(game.prices.current as number)}
          </Precos>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique para aproveitar a oferta!"
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  );
};

export default Banner;
