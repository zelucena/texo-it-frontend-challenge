import { fireEvent, render, screen } from "@testing-library/react";
import SearchByYear from "./SearchByYear";

describe("SearchByYear component", () => {
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

    test("calls onBlur handler and updates the state", () => {
        const { getByTestId } = render(<SearchByYear onSearch={() => {}} />);
        const inputElement = getByTestId("year-search-field");

        fireEvent.change(inputElement, { target: { value: "2023" } });
        fireEvent.blur(inputElement);

        expect(inputElement.value).toBe("2023");
    });

    test("calls onKeyDown handler and invokes the search function on 'Enter' key press", () => {
        const searchMock = jest.fn();
        const { getByTestId } = render(<SearchByYear onSearch={searchMock} />);
        const inputElement = getByTestId("year-search-field");

        fireEvent.change(inputElement, { target: { value: "2023" } });
        fireEvent.keyDown(inputElement, { key: "Enter" });

        expect(searchMock).toHaveBeenCalledWith("2023");
    });
});
