import { Button, Col, Form, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";

export default function SearchByYear({ onSearch }) {
    const [search, setSearch] = useState("");

    const searchByYear = () => {
        if (Number(search.trim())) {
            onSearch(search);
        }
    };

    return <>
        <Row>
            <Col sm={9}>
                <Form.Control
                    placeholder="Search by year"
                    data-testid="year-search-field"
                    value={search}
                    onChange={e => {
                        setSearch(e.target.value)
                    }}
                    onBlur={e => {
                        setSearch(e.target.value)
                    }}
                    onKeyDown={e => {
                        if (e.key === "Enter") {
                            searchByYear();
                        }
                    }}
                />
            </Col>
            <div className="col-auto">
                <Button variant="primary" onClick={searchByYear} data-testid="year-search-button">
                    <Search/>
                </Button>
            </div>
        </Row>
    </>;
}