import { useState, useEffect, useRef } from 'react';
import { useLocation, useParams, Link, useNavigate } from 'react-router-dom';
import api from '../../services/punkapi';
import Container from '../../components/Container';
import BeerDetails from '../../components/BeerDetails';
import ButtonBack from 'components/ButtonBack';

export default function BeerDetailPage() {
  const location = useLocation();
  const params = useParams();
  let navigate = useNavigate();
  const locationRef = useRef(location);
  // console.log('locationRef', locationRef); // state = null?????
  const beerId = Number(params.beerId);

  // console.log('location details', location);
  // console.log('params details', params);

  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const asyncFetch = async () => {
      const beer = await api.getBeerById(beerId);
      setBeer(beer);
    };
    asyncFetch();
  }, [beerId]);

  const onGoBack = () => {
    if (locationRef.current.state) {
      const { pathname, search } = locationRef.current.state.from;
      navigate(search ? pathname + search : pathname, { replace: true });
    }
    navigate(location?.state?.from ?? '/');
  };

  return (
    <>
      <Container>
        <ButtonBack onGoBack={onGoBack} />
        {beer && <BeerDetails beer={beer} />}
      </Container>
    </>
  );
}
