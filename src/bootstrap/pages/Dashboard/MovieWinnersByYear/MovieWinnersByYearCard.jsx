import { Button, Card, Form, Row } from "react-bootstrap";
import MovieWinnersByYearTable from "./MovieWinnersByYearTable";
import { Search } from "react-bootstrap-icons";
import { useState } from "react";

/**
 * Presentation of movie winners by year with search field. This component has no knowledge of fetching data
 * @param winners data to be displayed in the table
 * @param setYear search callback
 * @returns {JSX.Element}
 * @constructor
 */
export default function MovieWinnersByYearCard({ winners, setYear }) {
    const [search, setSearch] = useState("");

    const searchByYear = () => {
        if (Number(search.trim())) {
            setYear(search);
        }
    };

    return (
        <Card data-testid="movie-winners-by-year-card">
            <Card.Body>
                <Card.Title className="text-start fw-bold">List movie winners by year</Card.Title>
                <Card.Text as="div">
                    <Row>
                        <div className="col-sm-9">
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
                        </div>
                        <div className="col-auto">
                            <Button variant="primary" onClick={searchByYear} data-testid="year-search-button"><Search/></Button>
                        </div>
                    </Row>
                    <MovieWinnersByYearTable winners={winners}/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}