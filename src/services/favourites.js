const NAME = 'favourites';

export const getFavourites = () => {
  return JSON.parse(localStorage.getItem(NAME) || '[]');
};

export const addFavourite = beer => {
  const fav = getFavourites();
  if (fav.find(item => item.id === beer.id)) {
    return;
  }
  fav.push(beer);
  localStorage.setItem(NAME, JSON.stringify(fav));
};

export const deleteFavourite = id => {
  const fav = getFavourites().filter(beer => beer.id !== id);
  localStorage.setItem(NAME, JSON.stringify(fav));
};

export const inFavourites = id => {
  return !!getFavourites().find(beer => beer.id === id);
};
