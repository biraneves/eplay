// Libraries
import { useParams } from 'react-router-dom';

// Components
import Gallery from '../../components/Gallery';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Loader from '../../components/Loader';

// Methods
import { useGetGameQuery } from '../../services/api';

type GameParams = {
  id: string;
};

const Product = () => {
  const { id } = useParams() as GameParams;

  const { data: game } = useGetGameQuery(id);

  if (!game) return <Loader />;

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo" background="black">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" background="gray">
        <p>
          <strong>Plataforma:</strong> {game.details.system}
          <br />
          <strong>Desenvolvedor:</strong> {game.details.developer}
          <br />
          <strong>Editora:</strong> {game.details.publisher}
          <br />
          <strong>Idiomas:</strong> O jogo oferece suporte a diversos idiomas,
          incluindo {game.details.languages.join(', ').toLowerCase()} entre
          outros. As opções de áudio e legendas podem ser ajustadas nas
          configurações do jogo.
        </p>
      </Section>
      <Gallery
        name={game.name}
        defaultCover={game.media.thumbnail}
        items={game.media.gallery}
      />
    </>
  );
};

export default Product;
