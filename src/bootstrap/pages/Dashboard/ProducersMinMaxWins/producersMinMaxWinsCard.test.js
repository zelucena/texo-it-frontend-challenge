import { render, screen } from '@testing-library/react';
import ProducersMinMaxWinsCard from "./ProducersMinMaxWinsCard";
import minMax from './minMax.fixture.json';

test('Render the card with empty tables', () => {
    render(<ProducersMinMaxWinsCard min={[]} max={[]} />);

    const card = screen.getByTestId('producers-min-max-wins-card');
    expect(card).toBeInTheDocument();

    const maxHeading = screen.getByText('Maximum');
    const minHeading = screen.getByText('Minimum');

    const maxTable = maxHeading.parentElement.querySelector('table');
    const minTable = minHeading.parentElement.querySelector('table');

    expect(maxTable).toBeInTheDocument();
    expect(minTable).toBeInTheDocument();
});

test('Render the card with max and min tables with one producer each', () => {
    render(<ProducersMinMaxWinsCard min={minMax.min} max={minMax.max} />);

    const card = screen.getByTestId('producers-min-max-wins-card');

    const [maxTable, minTable] = card.querySelectorAll('table');

    expect(maxTable.querySelectorAll('tbody tr').length).toBe(1);
    expect(minTable.querySelectorAll('tbody tr').length).toBe(1);
});
