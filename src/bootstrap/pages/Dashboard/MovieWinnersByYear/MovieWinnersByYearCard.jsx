import { Card } from "react-bootstrap";
import MovieWinnersByYearTable from "./MovieWinnersByYearTable";
import SearchByYear from "./SearchByYear";

/**
 * Presentation of movie winners by year with search field. This component has no knowledge of fetching data
 * @param winners data to be displayed in the table
 * @param setYear search callback
 * @returns {JSX.Element}
 * @constructor
 */
export default function MovieWinnersByYearCard({ winners, setYear }) {
    return (
        <Card data-testid="movie-winners-by-year-card">
            <Card.Body>
                <Card.Title className="text-start fw-bold">List movie winners by year</Card.Title>
                <Card.Text as="div">
                    <SearchByYear onSearch={setYear} />
                    <MovieWinnersByYearTable winners={winners}/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}