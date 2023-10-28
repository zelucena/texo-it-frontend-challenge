import ListTable from "./ListTable";
import MoviesPagination from "./MoviesPagination";

export default function List({ movies, setYear, setWinner, pagination }) {
    return <>
        <h1>List movies</h1>
        <ListTable movies={movies} setYear={setYear} setWinner={setWinner} />
        <MoviesPagination
            page={pagination.number}
            setPage={pagination.setPage}
            first={pagination.first}
            last={pagination.last}
            totalPages={pagination.totalPages}
        />
    </>;
}