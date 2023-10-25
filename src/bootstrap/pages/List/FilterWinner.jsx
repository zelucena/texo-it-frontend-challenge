import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function FilterWinner({ filter }) {
    const [winner, setWinner] = useState('all');

    useEffect(() => {
        filter(winner);
    }, [filter, winner]);

    return <Form.Select
        value={winner}
        onChange={e => {
            setWinner(e.target.value);
        }}
        onBlur={e => {
            setWinner(e.target.value);
        }}
    >
        <option value="true">Yes</option>
        <option value="false">No</option>
        <option value="all">All</option>
    </Form.Select>
}
