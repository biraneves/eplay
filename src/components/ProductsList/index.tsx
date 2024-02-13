// Components
import Product from '../Product';

// Styled Components
import { List } from './styles';
import { Container } from '../Section/styles';

// Types
import { Game } from '../../pages/Home';

// Methods
import { formataPreco } from '../../utils/moeda';

export type Props = {
  title: string;
  background: 'gray' | 'black';
  games: Game[];
};

const ProductsList = ({ title, background, games }: Props) => {
  const getGameTags = (game: Game) => {
    const tags = [];

    if (game.release_date) {
      tags.push(game.release_date);
    }

    if (game.prices.discount) {
      tags.push(`${game.prices.discount}%`);
    }

    if (game.prices.current) {
      tags.push(formataPreco(game.prices.current));
    }

    return tags;
  };

  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {games.map((game) => (
            <Product
              key={game.id}
              category={game.details.category}
              description={game.description}
              image={game.media.thumbnail}
              infos={getGameTags(game)}
              system={game.details.system}
              title={game.name}
            />
          ))}
        </List>
      </div>
    </Container>
  );
};

export default ProductsList;
