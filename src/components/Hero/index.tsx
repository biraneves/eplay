// Components
import Button from '../Button';
import Tag from '../Tag';

// Styled Components
import { Banner, Infos } from './styles';

type Props = {
  game: Game;
};

// Assets
import { Game } from '../../pages/Home';
import { formataPreco } from '../../utils/moeda';

const Hero = ({ game }: Props) => (
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
              De <span>{formataPreco(game.prices.old)}</span>
              <br />
            </>
          )}
          {game.prices.current && <>Por {formataPreco(game.prices.current)}</>}
        </p>
        {game.prices.current && (
          <Button type="button" variant="primary" title="Adicionar ao carrinho">
            Adicionar ao carrinho
          </Button>
        )}
      </Infos>
    </div>
  </Banner>
);

export default Hero;
