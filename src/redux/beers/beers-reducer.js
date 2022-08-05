import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchBeers,
  fetchBeersById,
  fetchBeersByQuery,
} from './beers-operations';
import { addToFavourite } from './beers-actions';

const initialState = {
  beers: {
    items: [],
    loading: false,
    favourite: false,
    error: null,
  },
};

const itemsReducer = createReducer(initialState.beers.items, {
  [fetchBeers.fulfilled]: (state, { payload }) => payload,
  [fetchBeersById.fulfilled]: (state, { payload }) =>
    state.map(item => item.id === payload.id),
  [fetchBeersByQuery.fulfilled]: (_, { payload }) => payload,
});

const loadingReducer = createReducer(initialState.beers.loading, {
  [fetchBeers.pending]: () => true,
  [fetchBeers.fulfilled]: () => false,
  [fetchBeers.rejected]: () => false,
  [fetchBeersById.pending]: () => true,
  [fetchBeersById.fulfilled]: () => false,
  [fetchBeersById.rejected]: () => false,
  [fetchBeersByQuery.pending]: () => true,
  [fetchBeersByQuery.fulfilled]: () => false,
  [fetchBeersByQuery.rejected]: () => false,
});

const favouritesReducer = createReducer(initialState.beers.favourite, {
  [addToFavourite]: (_, { payload }) => payload,
});

const errorReducer = createReducer(initialState.beers.error, {
  [fetchBeers.rejected]: (_, action) => action.payload,
  [fetchBeers.pending]: () => null,
  [fetchBeersById.rejected]: (_, action) => action.payload,
  [fetchBeersById.pending]: () => null,
  [fetchBeersByQuery.rejected]: (_, action) => action.payload,
  [fetchBeersByQuery.pending]: () => null,
});

export default combineReducers({
  items: itemsReducer,
  loading: loadingReducer,
  favourite: favouritesReducer,
  error: errorReducer,
});
