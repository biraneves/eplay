// Components
import Button from '../Button';
import Tag from '../Tag';

// Styled Components
import { Banner, Infos } from './styles';

// Assets
import bannerImg from '../../assets/images/fundo_hogwarts.png';

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwarts Legacy</h2>
        <p>
          De <span>R$ 250,00</span>
          <br />
          Por R$ 190,00
        </p>
        <Button type="button" variant="primary" title="Adicionar ao carrinho">
          Adicionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
);

export default Hero;
