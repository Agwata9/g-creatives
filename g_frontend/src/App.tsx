import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Portfoliopage from './pages/Portfoliopage';
import BookExpertSession from './pages/BookExpertSession';


const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Homepage />} />
        
        {/* Portfolio Page Route */}
        <Route path="/portfolio" element={<Portfoliopage />} />
        <Route path="/book-expert" element={<BookExpertSession />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;