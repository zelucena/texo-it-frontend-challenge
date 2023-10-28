import FilterYear from "./FilterYear";
import FilterWinner from "./FilterWinner";
import { Table } from "react-bootstrap";

/**
 * Presentation of the entries in a table layout.
 * This component is not aware of the data source
 * @param movies
 * @param setYear
 * @param setWinner
 * @returns {JSX.Element}
 * @constructor
 */
export default function ListTable({ movies, setYear, setWinner }) {
    const mapRows = (_rows) => {
        return _rows.map(row => (
            <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.year}</td>
                <td>{row.title}</td>
                <td>{row.winner ? 'Yes' : 'No'}</td>
            </tr>),
        );
    }

    const rows = mapRows(movies);

    return <Table striped data-testid="list-table">
        <thead>
        <tr>
            <th>ID</th>
            <th>Year <FilterYear filter={setYear}/></th>
            <th>Title</th>
            <th>Winner?<FilterWinner filter={setWinner}/></th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
    </Table>
}