import { Link, useLocation } from 'react-router-dom';
import BeerItem from '../BeerItem';
import { textCl } from '../../styles/styleVars';
import styled from 'styled-components';

export default function BeerList({ beers }) {
  const location = useLocation();

  return (
    <List>
      {beers.map(beer => (
        <Item key={beer.id} beer={beer}>
          <ItemLink
            to={{
              pathname: `/beers/${beer.id}`,
              state: { from: location },
            }}
          >
            <BeerItem beer={beer} key={beer.id} />
          </ItemLink>
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
  margin-bottom: 50px;
`;
const Item = styled.li`
  width: 150px;
  margin-right: auto;
  margin-bottom: 20px;
  margin-left: auto;
  padding-bottom: 10px;

  transform: scale(1);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;

  color: #fff;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    box-shadow: 8px -6px 16px -2px #8c8c8c;
  }
`;
const ItemLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
