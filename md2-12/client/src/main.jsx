import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import { store } from "./store";
import HomePage from './pages/Home';
import CreatePage from './pages/CreatePage';
import UpdateTask from './pages/UpdateTask';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>
  },
  {
    path: "/create",
    element: <CreatePage></CreatePage>
  },
  {
    path: "/:id",
    element: <UpdateTask></UpdateTask>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
