import { Button, Card, Form, Row } from "react-bootstrap";
import MovieWinnersByYearTable from "./MovieWinnersByYearTable";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";

export default function MovieWinnersByYearCard({ winners, setYear }) {
    const [search, setSearch] = useState("");

    const searchByYear = () => {
        if (Number(search.trim())) {
            setYear(search);
        }
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-start fw-bold">List movie winners by year</Card.Title>
                <Card.Text as="div">
                    <Row>
                        <div className="col-sm-9">
                            <Form.Control
                                placeholder="Search by year"
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
                        </div>
                        <div className="col-auto">
                            <Button variant="primary" onClick={searchByYear}><Search/></Button>
                        </div>
                    </Row>
                    <MovieWinnersByYearTable winners={winners}/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}