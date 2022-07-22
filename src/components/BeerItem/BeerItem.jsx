import styled from 'styled-components';

export default function BeerItem({ beer }) {
  return (
    <li key={beer.id}>
      <ImageWrapper>
        <Image src={beer.image_url} alt={beer.name} />
      </ImageWrapper>
      <h2>{beer.name}</h2>
      <p>{beer.first_brewed}</p>
    </li>
  );
}

const Item = styled.li``;
const ImageWrapper = styled.div`
  width: 60px;
`;
const Image = styled.img`
  border-radius: 4px;
  width: 60px;
  height: 100%;
`;
