import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserManagement from './components/admin/UserManagement.jsx';
import Auth from './components/Auth';
import AuthAdmin from './components/AuthAdmin.jsx';
import './index.css';
import Dashboard from './pages/Admin/Dashboard.jsx';
import App from './pages/App.jsx';
import CartPage from './pages/CartPage';
import LoginPage from "./pages/LoginPage";
import store from "./store";
import ProductsManagement from './components/admin/ProductsManagement.jsx';
import { QueryClient, QueryClientProvider } from 'react-query';

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
        element: <AuthAdmin />,
        children: [
          {
            path: "dashboard",
            element: <Dashboard />
          },
          {
            path: "users",
            element: <UserManagement />
          },
          {
            path: "products",
            element: <ProductsManagement />
          }
        ]
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
])

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>

  </React.StrictMode>,
)
