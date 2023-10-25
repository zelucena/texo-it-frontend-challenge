import TopStudiosWithWinnersCard from "./TopStudiosWithWinnersCard";
import { useGetStudiosQuery } from "../../../../store/services/movies/moviesApi";

export default function TopStudiosWithWinners() {
    const { data, isLoading } = useGetStudiosQuery();

    if (isLoading) {
        return "loading";
    }

    const studios = data.studios.slice(0, 3);
    return <TopStudiosWithWinnersCard studiosWithWinners={studios} top={3}/>
}