import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Catalog from './pages/Catalog/Catalog';
import Favorites from './pages/Favorites/Favorites';


function App() {
  return (

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />}>
          </Route>

        </Route>
      </Routes>

  );
}
export default App;