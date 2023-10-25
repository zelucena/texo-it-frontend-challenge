import Nav from "react-bootstrap/Nav";

export default function MenuSidebar () {
    return (
        <Nav
            className="d-none d-md-block bg-light sidebar text-start"
            activeKey="/"
            // style={{ position: "fixed", height: "100%"}}
            style={{ height: "100vh"}}
        >
            <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/">Dashboard</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/list">List</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}
