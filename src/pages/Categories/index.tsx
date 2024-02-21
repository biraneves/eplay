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
  const { data: actionGames } = useGetActionGamesQuery();
  const { data: sportGames } = useGetSportGamesQuery();
  const { data: simulationGames } = useGetSimulationGamesQuery();
  const { data: fightingGames } = useGetFightingGamesQuery();
  const { data: rpgGames } = useGetRPGGamesQuery();

  if (
    actionGames &&
    sportGames &&
    simulationGames &&
    fightingGames &&
    rpgGames
  ) {
    return (
      <>
        <ProductsList
          id="action"
          title="Ação"
          background="black"
          games={actionGames}
        />
        <ProductsList
          id="sport"
          title="Esportes"
          background="gray"
          games={sportGames}
        />
        <ProductsList
          id="simulation"
          title="Simulação"
          background="black"
          games={simulationGames}
        />
        <ProductsList
          id="fighting"
          title="Luta"
          background="gray"
          games={fightingGames}
        />
        <ProductsList
          id="rpg"
          title="RPG"
          background="black"
          games={rpgGames}
        />
      </>
    );
  }

  return <h3>Carregando...</h3>;
};

export default Categories;
