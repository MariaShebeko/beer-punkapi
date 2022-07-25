import { useState, useEffect } from 'react';
import api from '../../services/punkapi';
import Container from '../../components/Container';
import BeerList from '../../components/BeerList';
import Pagination from '../../components/Pagination';

export default function HomePage() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api.getBeers(page).then(setBeers);
  }, [page]);

  // Уточнить как вытянуть totalPages чтобы дисэйблить кнопку пагинации

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
      {beers && (
        <>
          <BeerList beers={beers} />
          <Pagination prev={onPrevBtnClick} next={onNextBtnClick} />
        </>
      )}
    </Container>
  );
}

// const DecorativePicture = styled.div`
//   background-image: url('../../images/mainImage.jpg');
// `;
