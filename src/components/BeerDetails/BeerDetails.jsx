import ButtonFavourite from '../ButtonFavourite';
import styled from 'styled-components';

export default function BeerDetails({ beer }) {
  return (
    <>
      <Wrapper>
        <ImageWrapper>
          <Image src={beer.image_url} alt={beer.name} />
        </ImageWrapper>
        <div>
          <Title>
            {beer.name} <span>({beer.first_brewed.slice(3)})</span>
          </Title>
          <Tagline>"{beer.tagline}"</Tagline>

          <Description>
            <DescriptionTitle>Description: </DescriptionTitle>
            {beer.description}
          </Description>
          <ul>
            <FoodListName>Food_pairing:</FoodListName>
            {beer.food_pairing.map((food, index) => (
              <FoodItem key={index}>{food}</FoodItem>
            ))}
          </ul>
          <ButtonFavourite beer={beer} />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 20px;
  @media screen and (min-width: 720px) {
    display: flex;
    justify-content: center;
  }
`;
const ImageWrapper = styled.div`
  margin-right: 20px;
`;
const Image = styled.img`
  height: 200px;
  @media screen and (min-width: 720px) {
    height: 300px;
  }
`;
const Title = styled.h2`
  margin-bottom: 20px;
  text-transform: uppercase;
  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
`;
const Tagline = styled.p`
  font-style: italic;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
`;
const DescriptionTitle = styled.span`
  font-weight: bold;
`;
const Description = styled.p`
  font-size: 18px;
  line-height: 1.5;
`;
const FoodListName = styled.span`
  font-size: 18px;
  line-height: 1.5;
  font-weight: bold;
`;
const FoodItem = styled.li`
  font-size: 18px;
  line-height: 1.5;
`;
