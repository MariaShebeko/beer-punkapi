import { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import api from '../../services/punkapi';
import BeerDetails from '../../components/BeerDetails';

export default function BeerDetailPage() {
  const location = useLocation();
  const params = useParams();

  const beerId = Number(params.beerId);

  console.log('location details', location);
  // console.log('params details', params);

  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const beer = await api.getBeerById(beerId);
      setBeer(beer);
    };
    asyncFetch();
  }, [beerId]);

  return (
    <>
      {/* Нормально ли так хардкодить кнопку назад, до этого использовала хук useHistory */}
      <Link
        to={{
          pathname: `/`,
          state: { from: location },
        }}
      >
        <button>Go back</button>
      </Link>
      {beer && <BeerDetails beer={beer} />}
    </>
  );
}
