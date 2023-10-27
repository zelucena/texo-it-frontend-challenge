import { render, screen } from '@testing-library/react';
import TopStudiosWithWinnersCard from "./TopStudiosWithWinnersCard";
import topStudios from './topStudios.fixture.json';

test('Render top studios with empty data', () => {
    render(<TopStudiosWithWinnersCard studiosWithWinners={[]}/>);

    const card = screen.getByTestId('top-studios-with-winners-card');
    expect(card).toBeInTheDocument();
});

test('Render top studios with top 3', () => {
    render(<TopStudiosWithWinnersCard studiosWithWinners={topStudios}/>);

    const title = screen.getByText('Top 3 studios with winners');
    expect(title).toBeInTheDocument();
});
