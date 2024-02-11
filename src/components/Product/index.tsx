import Tag from '../Tag';
import { Card, Descricao, Titulo } from './styles';

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Sistema</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolorem
      labore voluptates quis, nam nemo a fugit architecto, saepe sed eaque
      repudiandae reiciendis optio enim. Magni explicabo fuga assumenda error!
    </Descricao>
  </Card>
);

export default Product;
