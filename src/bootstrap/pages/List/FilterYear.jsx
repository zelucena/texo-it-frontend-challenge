import { useState } from "react";
import { Form } from "react-bootstrap";

export default function FilterYear({ filter }) {
    const [year, setYear] = useState('');

    const debounce = setTimeout(() => {
        clearTimeout(debounce);
        filter(year);
    }, 400);
    return (
        <Form.Control
            placeholder="Filter by year"
            value={year}
            onChange={e => {
                setYear(e.target.value);
            }}
            onBlur={e => {
                setYear(e.target.value);
            }}
        />);
}