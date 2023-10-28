import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";

/**
 * Year input field. This field is responsible solely for presentation
 * @param filter on filter callback
 * @returns {JSX.Element}
 * @constructor
 */
export default function FilterYear({ filter }) {
    const [year, setYear] = useState('');

    useEffect(() => {
        const debounce = setTimeout(() => {
            filter(year);
        }, 400);

        return () => clearTimeout(debounce);
    }, [year, filter]);

    return (
        <Form.Control
            data-testid="filter-by-year-input"
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