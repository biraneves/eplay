// Components
import ProductsList from '../../components/ProductsList';

// Methods
import {
  useGetActionGamesQuery,
  useGetFightingGamesQuery,
  useGetRPGGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery,
} from '../../services/api';

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery();
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery();
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery();
  const { data: fightingGames, isLoading: isLoadingFighting } =
    useGetFightingGamesQuery();
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRPGGamesQuery();

  return (
    <>
      <ProductsList
        id="action"
        title="Ação"
        background="black"
        games={actionGames}
        isLoading={isLoadingAction}
      />
      <ProductsList
        id="sport"
        title="Esportes"
        background="gray"
        games={sportGames}
        isLoading={isLoadingSport}
      />
      <ProductsList
        id="simulation"
        title="Simulação"
        background="black"
        games={simulationGames}
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        id="fighting"
        title="Luta"
        background="gray"
        games={fightingGames}
        isLoading={isLoadingFighting}
      />
      <ProductsList
        id="rpg"
        title="RPG"
        background="black"
        games={rpgGames}
        isLoading={isLoadingRpg}
      />
    </>
  );
};

export default Categories;
