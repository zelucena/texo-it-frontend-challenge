import { render, screen } from '@testing-library/react';
import minMax from './minMax.fixture.json';
import ProducerTable from "./ProducerTable";

test('Render producers table empty data', () => {
    render(<ProducerTable producers={[]}/>);

    const table = screen.getByTestId('producers-table');
    expect(table).toBeInTheDocument();
});

test('Render top studios with one producer', () => {
    render(<ProducerTable producers={minMax.max}/>);

    const table = screen.getByTestId('producers-table');

    const rows = table.querySelector('tbody').querySelectorAll('tr');

    expect(rows).toHaveLength(1);
});

