import { useGetMovieDataQuery } from "../../../../store/services/movies/moviesApi";
import { useState } from "react";
import MoviesPagination from "./MoviesPagination";
import ListTable from "./ListTable";
import List from "./List";

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

    const movies = data?.content || [];

    const pagination = {
        page: data.number,
        setPage: setPage,
        first: data.first,
        last: data.last,
        totalPages: data.totalPages,
    }

    return <List pagination={pagination}  movies={movies} setYear={setYear} setWinner={setWinner}/>
}