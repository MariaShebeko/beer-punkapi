import styled from 'styled-components';

export default function BeerItem({ beer }) {
  return (
    <ItemWrapper>
      <Image src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.first_brewed}</p>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  // position: relative;
  height: 200px;
`;
const Image = styled.img`
  display: block;
  object-fit: cover;
  width: 60px;
  height: 100%;

  margin-bottom: 10px;
`;
