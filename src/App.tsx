import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Portfoliopage from './pages/Portfoliopage';

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
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;