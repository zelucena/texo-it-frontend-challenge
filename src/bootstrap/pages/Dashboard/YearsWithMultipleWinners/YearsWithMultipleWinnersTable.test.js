import { render, screen } from "@testing-library/react";
import YearsWithMultipleWinnersTable from "./YearsWithMultipleWinnersTable";
import winners from './winners.fixture.json';

test('Expect Multiple Winners Table to render', () => {
    render(<YearsWithMultipleWinnersTable yearsWinners={winners}/>);

    const table = screen.getByTestId('years-with-multiple-winners-table');
    expect(table).toBeInTheDocument();

    const rows = table.querySelector('tbody').querySelectorAll('tr');
    expect(rows).toHaveLength(3);
});

