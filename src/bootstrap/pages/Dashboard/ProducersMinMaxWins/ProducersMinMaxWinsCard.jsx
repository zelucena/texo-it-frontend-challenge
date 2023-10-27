import { Card } from "react-bootstrap";
import ProducerTable from "./ProducerTable";

export default function ProducersMinMaxWinsCard({ min, max }) {
    return (
        <Card data-testid="producers-min-max-wins-card">
            <Card.Body>
                <Card.Title className="text-start fw-bold">Producers with longest and shortest interval between
                    wins</Card.Title>
                <Card.Text as="div">
                    <div>
                        <h4 className="text-start">Maximum</h4>
                        <ProducerTable producers={max}/>
                    </div>
                    <div>
                        <h4 className="text-start">Minimum</h4>
                        <ProducerTable producers={min}/>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}