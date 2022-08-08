import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { beersOperations, beersSelectors } from '../../redux/beers';
import api from '../../services/punkapi';
import Container from '../../components/Container';
import BeerList from '../../components/BeerList';
import { Loader } from '../../components/Loader';
import Pagination from '../../components/Pagination';

export default function HomePage() {
  const [page, setPage] = useState(1);

  const beers = useSelector(beersSelectors.getItems);
  const loader = useSelector(beersSelectors.getLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(beersOperations.fetchBeers(page));
  }, [dispatch, page]);
  // Уточнить как вытянуть totalPages чтобы дисэйблить кнопку пагинации next

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
    <Container>
      {loader && <Loader />}
      {beers && (
        <>
          <BeerList beers={beers} />
          {beers.length > 1 && (
            <Pagination
              prev={onPrevBtnClick}
              next={onNextBtnClick}
              page={page}
            />
          )}
        </>
      )}
    </Container>
  );
}
