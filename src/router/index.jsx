import {
    createBrowserRouter,
} from "react-router-dom";
import YearsWithMultipleWinnersTable from "../bootstrap/pages/Dashboard/YearsWithMultipleWinners/YearsWithMultipleWinnersTable";
import List from "../bootstrap/pages/List";
import Dashboard from "../bootstrap/pages/Dashboard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
    },
    {
        path: "/list",
        element: <List />,
    },
]);