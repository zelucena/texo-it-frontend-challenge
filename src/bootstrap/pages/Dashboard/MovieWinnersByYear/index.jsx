import MovieWinnersByYearCard from "./MovieWinnersByYearCard";
import { useGetMovieWinnersByYearQuery } from "../../../../store/services/movies/moviesApi";
import { useState } from "react";

export default function MovieWinnersByYear() {
    const [year, setYear] = useState();
    const { data, isLoading } = useGetMovieWinnersByYearQuery(year, { skip: !year });

    if (isLoading) {
        return "loading";
    }

    return <MovieWinnersByYearCard winners={data || []} setYear={setYear} />
}