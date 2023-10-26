import { useGetYearsWithMultipleWinnersQuery } from "../../../../store/services/movies/moviesApi";
import YearsWithMultipleWinnersCard from "./YearsWithMultipleWinnersCard";

export default function YearsWithMultipleWinners() {
    const { data, isLoading } = useGetYearsWithMultipleWinnersQuery();

    if (isLoading) {
        return "loading";
    }
    return <YearsWithMultipleWinnersCard yearsWinners={data?.years || []}/>;
}