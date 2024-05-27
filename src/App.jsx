import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from 'components/Layout/Layout';
import NavBar from './components/NavBar/NavBar';

const Home = lazy(() => import('./pages/HomePage'));
const Catalog = lazy(() => import('./pages/CatalogPage'));
const Favorites = lazy(()=> import('./pages/FavoritesPage'))


export default function App() {
  return (
    <>
      <NavBar/>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    </>
  );
}