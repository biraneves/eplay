// Libraries
import { useState } from 'react';

// Components
import Section from '../Section';

// Styled Components
import { Action, Item, Items, Modal, ModalContent } from './styles';

//Assets
import hogwarts from '../../assets/images/fundo_hogwarts.png';
import spiderman from '../../assets/images/banner-homem-aranha.png';
import play from '../../assets/images/play.png';
import zoom from '../../assets/images/zoom.png';
import close from '../../assets/images/fechar.png';

interface IGalleryItem {
  type: 'image' | 'video';
  url: string;
}

type Props = {
  defaultCover: string;
  name: string;
};

interface IModalState extends IGalleryItem {
  isVisible: boolean;
}

const mock: IGalleryItem[] = [
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
  const [modalState, setModalState] = useState<IModalState>({
    type: 'image',
    url: '',
    isVisible: false,
  });

  const getMediaCover = (item: IGalleryItem) => {
    if (item.type === 'image') return item.url;

    return defaultCover;
  };

  const getMediaIcon = (item: IGalleryItem) => {
    if (item.type === 'image') return zoom;

    return play;
  };

  const closeModal = () => {
    setModalState({
      type: 'image',
      url: '',
      isVisible: false,
    });
  };

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item
              key={media.url}
              onClick={() => {
                setModalState({
                  type: media.type,
                  url: media.url,
                  isVisible: true,
                });
              }}
            >
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
      <Modal className={modalState.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Ícone para fechar" onClick={closeModal} />
          </header>
          {modalState.type === 'image' ? (
            <img src={modalState.url} alt="" />
          ) : (
            <iframe frameBorder={0} src={modalState.url} />
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  );
};

export default Gallery;
