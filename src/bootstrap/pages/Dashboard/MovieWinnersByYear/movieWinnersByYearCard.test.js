import { fireEvent, render, screen } from '@testing-library/react';
import MovieWinnersByYearCard from "./MovieWinnersByYearCard";
import winners from './winners.fixture.json';

test('Render the winners card without winners or year set', () => {
    render(<MovieWinnersByYearCard winners={[]}/>);

    const card = screen.getByTestId('movie-winners-by-year-card');
    expect(card).toBeInTheDocument();
});

test('Displaying the winners card with data', () => {
    const mockSetyear = jest.fn();

    render(<MovieWinnersByYearCard winners={winners} setYear={mockSetyear}/>);

    const card = screen.getByTestId('movie-winners-by-year-card');

    expect(card).toBeInTheDocument();
});
