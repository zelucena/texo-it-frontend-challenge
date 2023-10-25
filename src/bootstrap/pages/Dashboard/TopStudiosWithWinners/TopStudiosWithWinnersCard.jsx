import { Card } from "react-bootstrap";
import TopStudiosWithWinnersTable from "./TopStudiosWIthWinnersTable";

export default function TopStudiosWithWinnersCard({ studiosWithWinners, top }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-start fw-bold">Top {top} studios with winners</Card.Title>
                <Card.Text as="div">
                    <TopStudiosWithWinnersTable studiosWithWinners={studiosWithWinners} top={top}/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}