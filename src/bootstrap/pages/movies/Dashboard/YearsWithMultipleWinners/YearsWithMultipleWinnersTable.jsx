import { Table } from "react-bootstrap";

export default function YearsWithMultipleWinnersTable({ yearsWinners }) {
    const getRows = (_yearsWinners) => {
        return _yearsWinners.map(data => (
            <tr key={data.year}>
                <td>{data.year}</td>
                <td>{data.winnerCount}</td>
            </tr>
        ));
    }

    const rows = getRows(yearsWinners);

    return (
        <Table striped data-testid="years-with-multiple-winners-table">
            <thead>
            <tr>
                <th>Year</th>
                <th>Win count</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </Table>
    );
}