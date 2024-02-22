// Components
import Banner from '../../components/Banner';
import ProductsList from '../../components/ProductsList';

// Assets
import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api';

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
