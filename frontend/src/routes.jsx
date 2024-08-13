import Index from "./Pages/Index/Index";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import UserPanel from "./Pages/UserPanel/UserPanel";
import UserPanelAddress from "./Pages/UserPanel/UserPanelAddress/UserPanelAddress";
import UserPanelIndex from "./Pages/UserPanel/UserPanelIndex/UserPanelIndex";

const routes = [
    { path: "/", element: <Index /> },
    { path: "/register", element: <Register /> },
    { path: "/login", element: <Login /> },

    
    {
        path: "/userPanel", element: <UserPanel />, children: [
            { path: "", element: <UserPanelIndex /> },
            { path: "address", element: <UserPanelAddress /> },
        ]
    }
]



export default routes