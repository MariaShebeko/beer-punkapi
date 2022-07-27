export default function BeerDetails({ beer }) {
  return (
    <>
      <div>
        <div>
          <img srs={beer.image_url} alt={beer.name} />
        </div>
        <div>
          <h2>{beer.name}</h2>
          <p>Brewers tips:{beer.brewers_tips}</p>
          <p>{beer.first_brewed}</p>
          <p>Description: {beer.description}</p>
          <p>food_pairing: {beer.food_pairing}</p>
        </div>
      </div>
    </>
  );
}
