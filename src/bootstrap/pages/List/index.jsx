import { useGetMovieDataQuery } from "../../../store/services/movies/moviesApi";
import { Table } from "react-bootstrap";
import { useState } from "react";
import FilterYear from "./FilterYear";
import FilterWinner from "./FilterWinner";
import MoviesPagination from "./Pagination";

/**
 * Sidenote: these filters are still very simple and are not hurting the rerender performance.
 * If it became too complex I'd probably go for react-hook-forms. As of now it doesn't seem to be required
 * @returns {JSX.Element|string}
 * @constructor
 */
export default function Index() {
    const [year, setYear] = useState('');
    const [winner, setWinner] = useState('all');
    const [page, setPage] = useState(0);

    const { data, isLoading } = useGetMovieDataQuery({ year, winner, page });

    if (isLoading) {
        return 'loading';
    }

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

    const rows = mapRows(data?.content || []);

    return (<>
        <h1>List movies</h1>
        <Table striped>
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
        <MoviesPagination
            page={data.number}
            setPage={setPage}
            first={data.first}
            last={data.last}
            totalPages={data.totalPages}
        />
    </>)
}