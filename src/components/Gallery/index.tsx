import hogwarts from '../../assets/images/hogwarts_legacy.png';
import Section from '../Section';
import { Item, Items } from './styles';

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={hogwarts} alt="Imagem do link" />
      </Item>
      <Item>
        <img src={hogwarts} alt="Imagem do link" />
      </Item>
      <Item>
        <img src={hogwarts} alt="Imagem do link" />
      </Item>
      <Item>
        <img src={hogwarts} alt="Imagem do link" />
      </Item>
    </Items>
  </Section>
);

export default Gallery;
