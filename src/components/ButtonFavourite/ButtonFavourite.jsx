import { useState } from 'react';
import { deleteFavourite, addFavourite } from '../../services/favourites';
import { btnCl, accentTextCl, accentBgCl, textCl } from 'styles/styleVars';
import styled from 'styled-components';

export default function ButtonFavourite({ beer }) {
  const [inFav, setInFav] = useState(false);

  const onFavouriteBtnClick = e => {
    if (inFav) {
      deleteFavourite(beer.id);
    } else {
      addFavourite(beer);
    }
    setInFav(prevState => !prevState);
  };

  return (
    <Button type="button" onClick={onFavouriteBtnClick}>
      {inFav ? 'Delete from favourites' : 'Add to favourites'}
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  width: 120px;
  background-color: ${btnCl};
  cursor: pointer;
  color: ${accentTextCl};
  text-transform: uppercase;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
    color 300ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: ${textCl};
    color: ${accentBgCl};
  }
`;
