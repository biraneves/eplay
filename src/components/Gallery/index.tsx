import hogwarts from '../../assets/images/hogwarts_legacy.png';
import spiderman from '../../assets/images/banner-homem-aranha.png';
import Section from '../Section';
import { Action, Item, Items, Modal, ModalContent } from './styles';
import play from '../../assets/images/play.png';
import zoom from '../../assets/images/zoom.png';
import close from '../../assets/images/fechar.png';

type GalleryItem = {
  type: 'image' | 'video';
  url: string;
};

type Props = {
  defaultCover: string;
  name: string;
};

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderman,
  },
  {
    type: 'image',
    url: hogwarts,
  },
  {
    type: 'video',
    url: 'https://youtube.com/embed/uHGShqcAHlQ',
  },
];

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url;

    return defaultCover;
  };

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom;

    return play;
  };

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img src={getMediaIcon(media)} alt="Clique para ampliar" />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Ícone para fechar" />
          </header>
          <img src={spiderman} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  );
};

export default Gallery;
