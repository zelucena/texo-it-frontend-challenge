import { Table } from "react-bootstrap";

export default function TopStudiosWithWinnersTable({ studiosWithWinners }) {
    const getRows = (_studiosWithWinners) => {

        return _studiosWithWinners.map(data => (
            <tr key={data.name}>
                <td>{data.name}</td>
                <td>{data.winCount}</td>
            </tr>
        ));
    }

    const rows = getRows(studiosWithWinners);

    return (
        <Table striped data-testid="top-studios-table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Win count</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </Table>
    );
}