import BeerItem from '../BeerItem';
import styled from 'styled-components';

export default function BeerList({ beers }) {
  return (
    <List>
      {beers.map(beer => (
        <BeerItem beer={beer} key={beer.id} />
      ))}
    </List>
  );
}

const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  grid-gap: 53px;
  padding: 20px 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
