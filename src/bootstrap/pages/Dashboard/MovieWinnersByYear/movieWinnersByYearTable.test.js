import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MovieWinnersByYearTable from "./MovieWinnersByYearTable";
import winners from './winners.fixture.json';

test('Render the winners table with empty data', () => {
    render(<MovieWinnersByYearTable winners={[]}/>);

    const tableBody = screen.getByTestId('movie-winners-by-year-table').querySelector('tbody');
    const rows = tableBody.getElementsByTagName('tr');
    expect(rows).toHaveLength(0);
});

test('Render the winners table with fixture data', () => {
    render(<MemoryRouter><MovieWinnersByYearTable winners={winners}/></MemoryRouter>);

    const tableBody = screen.getByTestId('movie-winners-by-year-table').querySelector('tbody');
    const rows = tableBody.getElementsByTagName('tr');
    expect(rows).toHaveLength(2);
});
