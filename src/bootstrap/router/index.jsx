import { createBrowserRouter } from "react-router-dom";
import Index from "../pages/List";
import Dashboard from "../pages/Dashboard";
import BootstrapLayout from "../layout/Default";

export const router = createBrowserRouter([
    {
        "path": "/",
        element: <BootstrapLayout/>,
        children: [
            {
                path: "/",
                element: <Dashboard/>,
            },
            {
                path: "/list",
                element: <Index/>,
            },
        ],
    },

]);