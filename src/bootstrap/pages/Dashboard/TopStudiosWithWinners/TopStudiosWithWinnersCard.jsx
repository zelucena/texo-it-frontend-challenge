import { Card } from "react-bootstrap";
import TopStudiosWithWinnersTable from "./TopStudiosWIthWinnersTable";

export default function TopStudiosWithWinnersCard({ studiosWithWinners }) {
    return (
        <Card data-testid="top-studios-with-winners-card">
            <Card.Body>
                <Card.Title className="text-start fw-bold">Top {studiosWithWinners.length} studios with winners</Card.Title>
                <Card.Text as="div">
                    <TopStudiosWithWinnersTable studiosWithWinners={studiosWithWinners}/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}