import { Col, Row } from "react-bootstrap";

import YearsWithMultipleWinners from "./YearsWithMultipleWinners";
import TopStudiosWithWinners from "./TopStudiosWithWinners";
import ProducersMinMaxWins from "./ProducersMinMaxWins";
import MovieWinnersByYear from "./MovieWinnersByYear";

export default function Dashboard() {
    return (<>
            <Row className="my-2">
                <Col><YearsWithMultipleWinners/></Col>
                <Col><TopStudiosWithWinners/></Col>
            </Row>
            <Row>
                <Col><ProducersMinMaxWins/></Col>
                <Col><MovieWinnersByYear/></Col>
            </Row>
        </>
    );
}