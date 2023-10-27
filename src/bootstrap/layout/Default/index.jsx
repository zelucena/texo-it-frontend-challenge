import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./TopNavbar";
import MenuSidebar from "./MenuSidebar";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export default function ReactLayout() {
    return (
        <Container fluid>
            <Navbar/>
            <Row>
                <Col sm={3}>
                    <MenuSidebar/>
                </Col>
                <Col>
                    <Outlet/>
                </Col>
            </Row>
        </Container>
    );
}
