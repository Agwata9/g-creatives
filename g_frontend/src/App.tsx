import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Portfoliopage from './pages/Portfoliopage';
import BookExpertSession from './pages/BookExpertSession';

const MainLayout = () => (
  <>
    <CssBaseline />
    <Navbar />
    <Outlet /> {/* This will render child routes */}
    <Footer />
  </>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="portfolio" element={<Portfoliopage />} />
        <Route path="book-expert" element={<BookExpertSession />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;