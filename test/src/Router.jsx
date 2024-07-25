import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider, redirect,
} from 'react-router-dom';

//
import Root from './Root';

//
import { ErrorPage } from '../../src/components';

//
import ErrorPageTestLoader from './routes/ErrorPageTestLoader';
import FormItems from './routes/FormItems';
import FormSelects from './routes/FormSelects';
import JumpToContent from './routes/JumpToContentButton';

// Routes
const router = createBrowserRouter([{
  Component: Root,
  ErrorBoundary: ErrorPage,
  children: [
    { path: 'error-page', loader: ErrorPageTestLoader, element: '' },
    { path: 'form-items', Component: FormItems },
    { path: 'form-selects', Component: FormSelects },
    { path: 'jump-to-content-button', Component: JumpToContent },

    // Title
    { path: '', element: '' },
    // Other paths are redirected to title
    { path: '*', loader: async () => redirect('') },
  ],
}]);

//
if (document.getElementById('root')) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}
