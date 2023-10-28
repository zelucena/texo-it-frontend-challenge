import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FilterWinner from "./FilterWinner";

describe("FilterWinner component", () => {
    test("renders without errors", () => {
        const filterMock = jest.fn();
        const { container } = render(<FilterWinner filter={filterMock} />);
        expect(container).toBeTruthy();
    });

    test("calls the filter function with the correct value when the select value changes", () => {
        const filterMock = jest.fn();
        const { getByTestId } = render(<FilterWinner filter={filterMock} />);

        const selectElement = getByTestId("filter-winner-input");

        fireEvent.change(selectElement, { target: { value: "true" } });

        expect(filterMock).toHaveBeenCalledWith("true");
    });

    test("calls the filter function with the correct value when the select value blurs", () => {
        const filterMock = jest.fn();
        const { getByTestId } = render(<FilterWinner filter={filterMock} />);

        const selectElement = getByTestId("filter-winner-input");

        fireEvent.blur(selectElement);

        expect(filterMock).toHaveBeenCalledWith("all");
    });
});