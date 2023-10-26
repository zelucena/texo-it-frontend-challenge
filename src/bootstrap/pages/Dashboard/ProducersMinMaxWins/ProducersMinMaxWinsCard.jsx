import { Card } from "react-bootstrap";
import ProducerTable from "./ProducerTable";

export default function ProducersMinMaxWinsCard({ min, max }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-start fw-bold">Producers with longest and shortest interval between
                    wins</Card.Title>
                <Card.Text as="div">
                    <h4 className="text-start">Maximum</h4>
                    <ProducerTable producers={max}/>
                    <h4 className="text-start">Minimum</h4>
                    <ProducerTable producers={min}/>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}