// Components
import Banner from '../../components/Banner';
import ProductsList from '../../components/ProductsList';

// Assets
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api';

export interface IGalleryItem {
  type: 'image' | 'video';
  url: string;
}

export type Game = {
  id: number;
  name: string;
  description: string;
  release_date?: string;
  prices: {
    discount?: number;
    old?: number;
    current?: number;
  };
  details: {
    category: string;
    system: string;
    developer: string;
    publisher: string;
    languages: string[];
  };
  media: {
    thumbnail: string;
    cover: string;
    gallery: IGalleryItem[];
  };
};

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingOnSale } = useGetOnSaleQuery();
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery();

  return (
    <>
      <Banner />
      <ProductsList
        id="on-sale"
        title="Promoções"
        background="gray"
        games={onSaleGames}
        isLoading={isLoadingOnSale}
      />
      <ProductsList
        id="coming-soon"
        title="Em breve"
        background="black"
        games={soonGames}
        isLoading={isLoadingSoon}
      />
    </>
  );
};

export default Home;
