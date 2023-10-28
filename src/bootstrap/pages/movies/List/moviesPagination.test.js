import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MoviesPagination from "./MoviesPagination"; // Adjust the import path as needed

describe("MoviesPagination component", () => {
    test("renders without errors", () => {
        const { container } = render(
            <MoviesPagination page={0} setPage={() => {}} first={true} last={true} totalPages={5} />
        );
        expect(container).toBeTruthy();
    });

    test("calls setPage with the correct page number when a pagination item is clicked", () => {
        const setPageMock = jest.fn();
        const { getByTestId, getByText } = render(
            <MoviesPagination page={2} setPage={setPageMock} first={false} last={false} totalPages={5} />
        );

        const paginationItem = getByTestId("pagination-item-3");
        fireEvent.click(paginationItem);

        // Expecting setPage to be called with the clicked page number
        expect(setPageMock).toHaveBeenCalledWith(3);
    });

    test("disables First and Prev buttons when on the first page", () => {
        const { getByTestId } = render(
            <MoviesPagination page={0} setPage={() => {}} first={true} last={false} totalPages={5} />
        );

        const firstButton = getByTestId("first-button");
        const prevButton = getByTestId("prev-button");

        expect(firstButton.parentElement).toHaveClass("disabled");
        expect(prevButton.parentElement).toHaveClass("disabled");
    });

    test("disables Next and Last buttons when on the last page", () => {
        const { getByTestId } = render(
            <MoviesPagination page={4} setPage={() => {}} first={false} last={true} totalPages={5} />
        );

        const nextButton = getByTestId("next-button");
        const lastButton = getByTestId("last-button");

        expect(nextButton.parentElement).toHaveClass("disabled");
        expect(lastButton.parentElement).toHaveClass("disabled");
    });

    test("calls setPage with the correct page number when First button is clicked", () => {
        const setPageMock = jest.fn();
        const { getByTestId } = render(
            <MoviesPagination page={2} setPage={setPageMock} first={false} last={false} totalPages={5} />
        );

        const firstButton = getByTestId("first-button");
        fireEvent.click(firstButton);

        expect(setPageMock).toHaveBeenCalledWith(0);
    });

    test("calls setPage with the correct page number when Prev button is clicked", () => {
        const setPageMock = jest.fn();
        const { getByTestId } = render(
            <MoviesPagination page={2} setPage={setPageMock} first={false} last={false} totalPages={5} />
        );

        const prevButton = getByTestId("prev-button");
        fireEvent.click(prevButton);

        expect(setPageMock).toHaveBeenCalledWith(1);
    });

    test("calls setPage with the correct page number when Next button is clicked", () => {
        const setPageMock = jest.fn();
        const { getByTestId } = render(
            <MoviesPagination page={2} setPage={setPageMock} first={false} last={false} totalPages={5} />
        );

        const nextButton = getByTestId("next-button");
        fireEvent.click(nextButton);

        expect(setPageMock).toHaveBeenCalledWith(3);
    });

    test("calls setPage with the correct page number when Last button is clicked", () => {
        const setPageMock = jest.fn();
        const { getByTestId } = render(
            <MoviesPagination page={2} setPage={setPageMock} first={false} last={false} totalPages={5} />
        );

        const lastButton = getByTestId("last-button");
        fireEvent.click(lastButton);

        expect(setPageMock).toHaveBeenCalledWith(4);
    });
});