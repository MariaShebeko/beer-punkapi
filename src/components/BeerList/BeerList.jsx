import { Link, useLocation } from 'react-router-dom';
import BeerItem from '../BeerItem';
import styled from 'styled-components';
import { accentTextCl } from '../../styles/styleVars';

export default function BeerList({ beers }) {
  const location = useLocation();

  return (
    <List>
      {beers.map(beer => (
        <Item key={beer.id} beer={beer}>
          <Link
            to={{
              pathname: `/beers/${beer.id}`,
              state: { from: location },
            }}
          >
            <BeerItem beer={beer} key={beer.id} />
          </Link>
        </Item>
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

const Item = styled.li`
  padding-bottom: 10px;
  border-radius: 9px;
  background-color: ${accentTextCl};
`;
