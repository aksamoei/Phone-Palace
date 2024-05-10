// routes.js
import PhoneDetails from "./components/PhoneDetails";
import About from "./pages/About";
import CartItems from "./pages/CartItems";
import Home from "./pages/Home";


const routes = [
  {
    path: "/",
    element: <Home />
  }, 
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/cart",
    element: <CartItems />
  },
  {
    path: "/phone/:id",
    element: <PhoneDetails />
  }
];

export default routes;