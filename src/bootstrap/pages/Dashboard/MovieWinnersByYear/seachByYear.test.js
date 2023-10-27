import { fireEvent, render, screen } from "@testing-library/react";
import MovieWinnersByYearCard from "./MovieWinnersByYearCard";
import SearchByYear from "./SearchByYear";

test('Mock searching some year', () => {
    const mockSetyear = jest.fn();

    render(<SearchByYear onSearch={mockSetyear}/>);

    const searchField = screen.getByTestId('year-search-field');

    const button = screen.getByTestId('year-search-button');

    fireEvent.change(searchField, { target: { value: '2018' } });

    expect(searchField.value).toBe('2018');

    fireEvent.click(button);

    expect(mockSetyear).toHaveBeenCalledWith('2018');
});