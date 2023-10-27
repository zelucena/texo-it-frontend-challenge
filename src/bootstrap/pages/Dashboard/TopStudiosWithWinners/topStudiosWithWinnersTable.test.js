import { render, screen } from '@testing-library/react';
import topStudios from './topStudios.fixture.json';
import TopStudiosWithWinnersTable from "./TopStudiosWIthWinnersTable";

test('Render studios table with top 3', () => {
    render(<TopStudiosWithWinnersTable studiosWithWinners={topStudios}/>);

    const table = screen.getByTestId('top-studios-table');
    const rows = table.querySelector('tbody').querySelectorAll('tr');
    expect(rows).toHaveLength(3);
});
