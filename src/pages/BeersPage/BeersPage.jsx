import { useState, useEffect } from 'react';
import api from '../../services/punkapi';
import SearchForm from '../../components/SearchForm';
import Container from '../../components/Container';
import BeerList from '../../components/BeerList';
import Pagination from '../../components/Pagination';

export default function BeersPage() {
  const [beers, setBeers] = useState([]);
  const [beerName, setBeerName] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (beerName) {
      api.getBeerByQuery(beerName, page).then(setBeers);
    }
  }, [beerName, page]);

  const formSubmit = beerName => {
    setBeerName(beerName);
    setBeers([]);
  };

  const onNextBtnClick = () => {
    setPage(state => state + 1);
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };
  const onPrevBtnClick = () => {
    setPage(state => state - 1);
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <>
      <Container>
        <SearchForm onSubmit={formSubmit} />
        {beers && <BeerList beers={beers} />}
        {beers.length > 1 && (
          <Pagination prev={onPrevBtnClick} next={onNextBtnClick} />
        )}
      </Container>
    </>
  );
}
