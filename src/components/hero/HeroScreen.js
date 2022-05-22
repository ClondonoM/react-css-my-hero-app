import { useParams, Navigate } from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const hero = getHeroById(heroeId);
  if (!hero) {
    return <Navigate to='/' />;
  }

  return (
    <div>
      <h1>HeroScreen</h1>
      <hr />
      <p>{hero.superhero}</p>
    </div>
  );
};
