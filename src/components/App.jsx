import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import {
  HomePage,
  BeersPage,
  BeerDetailPage,
  NotFoundPage,
  FavouriteBeersPage,
} from '../pages';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/beers" element={<BeersPage />}></Route>
        <Route path="/beers/:beerId" element={<BeerDetailPage />}></Route>
        <Route path="/beers/favourite" element={<FavouriteBeersPage />}></Route>

        <Route element={<NotFoundPage />}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
