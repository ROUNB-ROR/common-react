import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter, RouterProvider, redirect,
} from 'react-router-dom';

//
import Root from './Root';

//
import FormItems from './routes/FormItems';
import FormSelects from './routes/FormSelects';

// Routes
const router = createBrowserRouter([{
  Component: Root,
  children: [
    { path: 'form-items', Component: FormItems },
    { path: 'form-selects', Component: FormSelects },

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
