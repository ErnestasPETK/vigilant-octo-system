import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LandingPage from './pages/landing/LandingPage.jsx';
import ProductsPage from './pages/products/ProductsPage.jsx';
import ErrorPage from './pages/error/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage Error={"Page not found"} />,
  },
  {
    path: "products",
    element: <ProductsPage />,
    errorElement: <ErrorPage Error={"Page not found"} />,

  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
