import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import FilterYear from "./FilterYear"; // adjust the import path as needed

describe("FilterYear component", () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    test("renders without errors", () => {
        const filterMock = jest.fn();
        const { container } = render(<FilterYear filter={filterMock} />);
        expect(container).toBeTruthy();
    });

    test("updates the state when the input changes", () => {
        const filterMock = jest.fn();
        const { getByPlaceholderText } = render(<FilterYear filter={filterMock} />);

        const inputElement = getByPlaceholderText("Filter by year");

        fireEvent.change(inputElement, { target: { value: "2023" } });

        expect(inputElement.value).toBe("2023");
    });

    test("calls the filter function with the correct value when the input changes", () => {
        const filterMock = jest.fn();
        const { getByTestId } = render(<FilterYear filter={filterMock} />);

        const inputElement = getByTestId("filter-by-year-input");

        fireEvent.change(inputElement, { target: { value: "2023" } });

        act(() => {
            // Manually advance the timer by the debounce delay (400ms)
            // running all timers will mess up with useEffect and debounce all together
            jest.advanceTimersByTime(400);
        });

        expect(filterMock).toHaveBeenCalledWith("2023");
    });

    test("calls the filter function with the correct value when the input blurs", () => {
        const filterMock = jest.fn();
        const { getByPlaceholderText } = render(<FilterYear filter={filterMock} />);

        const inputElement = getByPlaceholderText("Filter by year");

        fireEvent.blur(inputElement);

        act(() => {
            jest.advanceTimersByTime(400);
        });

        expect(filterMock).toHaveBeenCalledWith("");
    });
});