import App from "@/App";
import { About, Home, Order, Product, Users } from "@/pages";
import Login from "@/pages/Login";
import ProductAdd from "@/pages/products/Product.add";
import ProductEdit from "@/pages/products/Product.edit";
import { createBrowserRouter } from 'react-router-dom';


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
       index: true,
        element: <Home />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/product',
        element: <Product />
      },
      {
        path: '/product/add-product',
        element: <ProductAdd />
      },
      {
        path: '/product/edit-product/:id',
        element: <ProductEdit />
      },
      {
        path: '/order',
        element: <Order />
      },
      {
        path: '/user',
        element: <Users />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />  

  }
])


export default routes;