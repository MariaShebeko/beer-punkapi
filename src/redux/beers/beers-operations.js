import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/punkapi';

export const fetchBeers = createAsyncThunk(
  'beers/fetchBeers',
  async (page, { rejectWithValue }) => {
    try {
      const data = await api.getBeers(page);
      console.log('data from redux', data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchBeersById = createAsyncThunk(
  'beers/fetchBeersById',
  async (id, { rejectWithValue }) => {
    try {
      const data = await api.getBeerById(id);
      console.log('dataById from redux', data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchBeersByQuery = createAsyncThunk(
  'beers/fetchBeersByQuery',
  async ({ query, page }, { rejectWithValue }) => {
    try {
      const data = await api.getBeerByQuery(query, page);
      console.log('dataByQuery from redux', data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
