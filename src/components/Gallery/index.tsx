// Libraries
import { useState } from 'react';

// Components
import Section from '../Section';

// Styled Components
import { Action, Item, Items, Modal, ModalContent } from './styles';

// Interfaces
import { IGalleryItem } from '../../pages/Home';

//Assets
import play from '../../assets/images/play.png';
import zoom from '../../assets/images/zoom.png';
import close from '../../assets/images/fechar.png';

type Props = {
  defaultCover: string;
  name: string;
  items: IGalleryItem[];
};

interface IModalState extends IGalleryItem {
  isVisible: boolean;
}

const Gallery = ({ defaultCover, name, items }: Props) => {
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
          {items.map((media, index) => (
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
