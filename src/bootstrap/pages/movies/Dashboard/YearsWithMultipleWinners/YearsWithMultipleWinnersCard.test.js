import YearsWithMultipleWinnersCard from "./YearsWithMultipleWinnersCard";
import { render, screen } from "@testing-library/react";

test('Expect Multiple Winners Card to render', () => {
    render(<YearsWithMultipleWinnersCard yearsWinners={[]}/>);

    const card = screen.getByTestId('years-with-multiple-winners-card');
    expect(card).toBeInTheDocument();

    const table = screen.getByTestId('years-with-multiple-winners-table');
    expect(table).toBeInTheDocument();
});

