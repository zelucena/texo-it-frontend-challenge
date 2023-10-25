import { Table } from "react-bootstrap";

export default function MovieWinnersByYearTable({ winners }) {
    const getRows = (_winners) => {

        return _winners.map(data => (
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.year}</td>
                <td>{data.title}</td>
            </tr>
        ));
    }

    const rows = getRows(winners);

    return (
        <Table striped>
            <thead>
            <tr>
                <th>Id</th>
                <th>Year</th>
                <th>Title</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
        </Table>
    );
}