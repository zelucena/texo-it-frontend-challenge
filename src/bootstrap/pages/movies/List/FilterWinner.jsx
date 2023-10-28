import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";

/**
 * Input filter for whether is winner of not. "All" refers to all entries
 * This field is responsible solely for presentation
 * @param filter on filter callback
 * @returns {JSX.Element}
 * @constructor
 */
export default function FilterWinner({ filter }) {
    const [winner, setWinner] = useState('all');

    useEffect(() => {
        filter(winner);
    }, [filter, winner]);

    return <Form.Select
        data-testid="filter-winner-input"
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
