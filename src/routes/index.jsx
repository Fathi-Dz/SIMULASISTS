import { createBrowserRouter } from 'react-router';

import DashboardLayout from '../layouts/pageLayouts';

import Home from '../pages/home';
import Books from '../pages/books';
import BookDetail from '../pages/booksDetail';
import Favorites from '../pages/pavorites';
import Help from '../pages/help';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'books',
        element: <Books />,
      },
      {
        path: 'books/:id',
        element: <BookDetail />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'help',
        element: <Help />,
      },
    ],
  },
]);

export default router;