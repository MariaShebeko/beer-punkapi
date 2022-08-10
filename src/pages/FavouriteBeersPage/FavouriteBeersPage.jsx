import { useState, useEffect } from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';
import { getFavourites } from '../../services/favourites';
import BeerList from 'components/BeerList';
import Container from '../../components/Container';

export default function FavouriteBeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    setBeers(getFavourites());
  }, []);

  return (
    <>
      <Container>
        {beers.length > 1 ? (
          <BeerList beers={beers} />
        ) : (
          "You haven't choose your favourite beer yet."
        )}
      </Container>
    </>
  );
}
