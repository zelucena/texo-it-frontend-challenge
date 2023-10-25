import {
    createBrowserRouter,
} from "react-router-dom";
import Index from "../pages/List";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/list",
        element: <Index />,
    },
]);