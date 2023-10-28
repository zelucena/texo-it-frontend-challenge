import { createBrowserRouter } from "react-router-dom";
import List from "../bootstrap/pages/movies/List";
import Dashboard from "../bootstrap/pages/movies/Dashboard";
import BootstrapLayout from "../bootstrap/layout/Default";

/**
 * routes both Movie pages to a Bootstrap 5 Layout. Other pages may be included with a different layout as required
 * There may be a guest page or the Bootstrap part could be scraped from here.
 * This comment should also be removed if obsolete
 * @type {Router}
 */
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
                element: <List/>,
            },
        ],
    },

]);