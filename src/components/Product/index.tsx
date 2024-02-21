// Components
import Tag from '../Tag';

// Styled Components
import { Card, Descricao, Infos, Titulo } from './styles';

type Props = {
  id: number;
  title: string;
  category: string;
  system: string;
  description: string;
  infos: string[];
  image: string;
};

const Product = ({
  title,
  category,
  system,
  description,
  infos,
  image,
  id,
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) return descricao.slice(0, 92) + '...';

    return descricao;
  };

  return (
    <Card title={`Mais detalhes do jogo ${title}`} to={`/product/${id}`}>
      <img src={image} alt={title} />
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>{getDescricao(description)}</Descricao>
    </Card>
  );
};

export default Product;
