import Nav from "react-bootstrap/Nav";
import { LinkContainer } from 'react-router-bootstrap';

export default function MenuSidebar() {
    return (
        <Nav
            className="d-none d-md-block bg-light sidebar text-start"
            activeKey="/"
            style={{ height: "100vh" }}
        >
            <Nav.Item>
                <LinkContainer to="/">
                    <Nav.Link>Dashboard</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/list">
                    <Nav.Link>List</Nav.Link>
                </LinkContainer>
            </Nav.Item>
        </Nav>
    );
}
