import {HomePage, CinemaPage, MovieListPage} from './App.tsx'
import './index.css'
import App from './App.tsx'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  ReactDOM from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "CinemaPage",
        element: <CinemaPage />,
      },
      {
        path: "MovieListPage",
        element: <MovieListPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
