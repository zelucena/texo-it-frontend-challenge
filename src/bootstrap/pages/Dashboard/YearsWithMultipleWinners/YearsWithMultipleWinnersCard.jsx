import { Card } from "react-bootstrap";
import YearsWithMultipleWinnersTable from "./YearsWithMultipleWinnersTable";

export default function YearsWithMultipleWinnersCard({ yearsWinners }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-start fw-bold">List Years with multiple winners</Card.Title>
                <Card.Text as="div">
                    <YearsWithMultipleWinnersTable yearsWinners={yearsWinners}/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}