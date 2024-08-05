import Index from "./Pages/Index/Index";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";

const routes = [
    { path: "/", element: <Index /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> }
]



export default routes