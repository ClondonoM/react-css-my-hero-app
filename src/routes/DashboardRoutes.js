import { Routes, Route } from 'react-router-dom';
import { Navbar } from '../components/ui/Navbar';
import { DcScreen } from '../components/dc/DcScreen';
import { MarverlScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='marvel' element={<MarverlScreen />} />
          <Route path='dc' element={<DcScreen />} />
          <Route path='search' element={<SearchScreen />} />
          <Route path='hero' element={<HeroScreen />} />
          <Route path='/' element={<MarverlScreen />} />
        </Routes>
      </div>
    </>
  );
};
