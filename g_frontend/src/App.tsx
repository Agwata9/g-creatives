import { CssBaseline } from '@mui/material';
import { 
  createBrowserRouter,
  RouterProvider,
  Outlet
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Portfoliopage from './pages/Portfoliopage';
import BookExpertSession from './pages/BookExpertSession';
import About from './components/About';

// 1. Create Main Layout Component
const MainLayout = () => {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Outlet />  {/* Renders the current route's element */}
      <Footer />
    </>
  );
};

// 2. Define Router Configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'portfolio',
        element: <Portfoliopage />
      },
      {
        path: 'book-expert',
        element: <BookExpertSession />
      },
      // Add error boundary for 404 handling
      {
        path: '*',
        element: <div>404 - Page Not Found</div>
      }
    ]
  }
]);

// 3. Updated App Component
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;