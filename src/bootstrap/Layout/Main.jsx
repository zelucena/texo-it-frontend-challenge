import { router } from "../../router";
import { RouterProvider } from "react-router-dom";
import { Col } from "react-bootstrap";

export default function Main() {
    return <RouterProvider router={router} />
}