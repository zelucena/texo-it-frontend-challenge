import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import Navbar from "./TopNavbar";
import MenuSidebar from "./MenuSidebar";
import Container from "react-bootstrap/Container";
import { router } from "../../router";
import { RouterProvider } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

export default function ReactLayout() {
    return (
        <Container fluid>
            <Navbar/>
            <Row>
                <Col sm={3}>
                    <MenuSidebar/>
                </Col>
                <Col>
                    <RouterProvider router={router} />
                </Col>
            </Row>
        </Container>
    );
}
