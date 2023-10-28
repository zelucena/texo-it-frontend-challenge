import { Table } from "react-bootstrap";

export default function ProducerTable({ producers }) {
    const getRows = (_producers) => {
        return _producers.map(data => (
            <tr key={data.producer}>
                <td>{data.producer}</td>
                <td>{data.interval}</td>
                <td>{data.previousWin}</td>
                <td>{data.followingWin}</td>
            </tr>
        ));
    }

    const rows = getRows(producers);

    return (
        <Table striped data-testid="producers-table">
            <thead>
            <tr>
                <th>Producer</th>
                <th>Interval</th>
                <th>Previous Year</th>
                <th>Following Year</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </Table>
    );
}