import React from "react";
import { render } from "@testing-library/react";
import List from "./List";

describe("List component", () => {
    test("renders the header and sub-components", () => {
        const samplePagination = {
            number: 0,
            setPage: () => {},
            first: true,
            last: false,
            totalPages: 2,
        };

        const { getByText, getByTestId } = render(
            <List
                movies={[]}
                setYear={() => {}}
                setWinner={() => {}}
                pagination={samplePagination}
            />
        );

        const h1Element = getByText("List movies");
        expect(h1Element).toBeInTheDocument();

        const table = getByTestId("list-table");
        expect(table).toBeInTheDocument();

        const pagination = getByTestId("movies-pagination");
        expect(pagination).toBeInTheDocument();
    });
});
