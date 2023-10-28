import { useGetAwardsIntervalQuery } from "../../../../../store/services/movies/moviesApi";
import ProducersMinMaxWinsCard from "./ProducersMinMaxWinsCard";

export default function ProducersMinMaxWins() {
    const { data: awardsInterval, isLoading } = useGetAwardsIntervalQuery();

    if (isLoading) {
        return "Loading";
    }

    return <ProducersMinMaxWinsCard min={awardsInterval?.min || []} max={awardsInterval?.max || []}/>;
}