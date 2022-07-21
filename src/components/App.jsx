import api from '../services/punkapi';
import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';

import Navigation from './Navigation';
import { HomePage, BeersPage, BeerDetailPage, NotFoundPage } from '../pages';

function App() {
  // api.getBeers(2).then(res => console.log('res all', res));
  // api.getBeerById(1).then(res => console.log('res ID', res));
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<BeersPage />}></Route>
        <Route path="/beers/:beerId" element={<BeerDetailPage />}></Route>
        <Route element={<NotFoundPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
