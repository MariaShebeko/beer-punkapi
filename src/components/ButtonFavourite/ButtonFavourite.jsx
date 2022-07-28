import { useState } from 'react';
import { deleteFavourite, addFavourite } from '../../services/favourites';

export default function ButtonFavourite({ beer }) {
  const [inFav, setInFav] = useState(false);

  const onFavouriteBtnClick = () => {
    if (inFav) deleteFavourite(beer.id);
    else addFavourite(beer);
    setInFav(!inFav);
  };

  return (
    <button type="button" onClick={onFavouriteBtnClick}>
      {inFav ? 'Delete from favourites' : 'Add to favourites'}
    </button>
  );
}
