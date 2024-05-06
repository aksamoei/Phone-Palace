//entry point to DOM
import App from  "./App.js"
import Home from "./pages/Home.js";
import Cart from "./pages/Cart.js";
import Item from "./pages/Item.js";
import About from "./pages/About.js";


const routes =  [
    {
        path: "/",
        element: <App />,
        errorElement: <h3>404 No Found</h3>,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/item",
                element: <Item />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
]

export default routes;