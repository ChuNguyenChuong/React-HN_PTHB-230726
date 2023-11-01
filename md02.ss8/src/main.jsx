import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import RootPage from './pages';
import ProductsDetail from './pages/ProductsDetail';
import PostsPage from './pages/Posts';
import DetailPost from "./pages/Posts/Detail"
import Products from './pages/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage></RootPage>,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>,
  },
  {
    path: "/products",
    element: <Products></Products>,
  },
  {
    path: "/products/:id",
    element: <ProductsDetail></ProductsDetail>,
  },

  {
    path: "/product/:name",
    element: <ProductsDetail></ProductsDetail>,
  },
  {
    path: "posts",
    element: <PostsPage />,
    children: [
      {
        path: "about-posts",
        element: <div>about posts</div>,
      },
      {
        path: ":id",
        element: <DetailPost></DetailPost>,
      }
    ]
  }
]);

// Link
// NavLink
// useNavigate
// Navigate


// bài 1
// tạo 1 trang web có 3 page lần lượt là Home, Product, Posts. /home /product /posts
// với Product và Post page tạo ra dynamic page theo sản phẩm và bài post /product/:id /posts/:id
// tạo các btn Link, NavLink đi đến các page tương ứng


// product show 1 list san pham rồi click vao sản nao thi di toi san pham do
// /product/:id hien thi ra cai id tren man hinh 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
