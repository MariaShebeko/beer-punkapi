import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './Navigation';
import { GlobalStyle } from './GlobalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(() =>
  import('../pages/HomePage' /*webpackChunkName: "home-page"*/)
);
const BeersPage = lazy(() =>
  import('../pages/BeersPage' /*webpackChunkName: "beers-page"*/)
);
const BeerDetailPage = lazy(() =>
  import('../pages/BeerDetailPage' /*webpackChunkName: "beer-detail-page"*/)
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage' /*webpackChunkName: "notfound-page"*/)
);
const FavouriteBeersPage = lazy(() =>
  import('../pages/FavouriteBeersPage' /*webpackChunkName: "favourite-page"*/)
);

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/beers" element={<BeersPage />}></Route>
          <Route path="/beers/:beerId" element={<BeerDetailPage />}></Route>
          <Route
            path="/beers/favourite"
            element={<FavouriteBeersPage />}
          ></Route>
          <Route element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
