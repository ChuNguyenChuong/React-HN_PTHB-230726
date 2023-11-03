import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import AdminPage from './pages/Admin';
import App from './pages/App.jsx';
import store from "./store";
import { Provider } from "react-redux"
import LoginPage from "./pages/LoginPage"
import Auth from './components/Auth';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/cart",
        element: <CartPage></CartPage>
      },
      {
        path: "/admin",
        element: <AdminPage />
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
