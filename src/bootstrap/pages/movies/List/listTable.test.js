import { render, screen } from "@testing-library/react";
import movies from "./movies.fixture.json";
import ListTable from "./ListTable";

test('Expect table to render with data', () => {
    const setYearMock = jest.fn();
    const setWinnerMock = jest.fn();

    render(<ListTable movies={movies} setYear={setYearMock} setWinner={setWinnerMock}/>);

    const table = screen.getByTestId('list-table');
    expect(table).toBeInTheDocument();

    const rows = table.querySelector('tbody').querySelectorAll('tr');
    expect(rows).toHaveLength(15);
});