import styled from 'styled-components';

export default function BeerItem({ beer }) {
  return (
    <ItemWrapper>
      <Image src={beer.image_url} alt={beer.name} />
      <Title>{beer.name}</Title>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div``;
const Image = styled.img`
  display: block;
  margin: 0 auto;
  object-fit: contain;
  width: 60px;
  height: 150px;

  margin-bottom: 10px;
`;
const Title = styled.h2`
  text-align: center;
`;
