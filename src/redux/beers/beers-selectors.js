// import { createSelector } from '@reduxjs/toolkit';

export const getItems = state => state.beers.items;
export const getPage = state => state.beers.page;
export const getQuery = state => state.beers.query;
export const getLoader = state => state.beers.loading;
export const getFavourite = state => state.beers.favourite;
