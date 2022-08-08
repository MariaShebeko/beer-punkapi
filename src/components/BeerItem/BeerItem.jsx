import styled from 'styled-components';

export default function BeerItem({ beer }) {
  return (
    <ItemWrapper>
      <Image src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div``;
const Image = styled.img`
  display: block;
  object-fit: contain;
  width: 60px;
  height: 150px;

  margin-bottom: 10px;
`;
